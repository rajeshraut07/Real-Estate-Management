package com.example.Real_Estate_Management.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Real_Estate_Management.Entity.User;
import com.example.Real_Estate_Management.Repositroy.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    // CREATE
    public User createUser(User user) {
        return userRepository.save(user);
    }

    // GET ALL
    public List<User> getAllUser() {
        return userRepository.findAll();
    }

    // GET BY ID
    public User getUserById(Long id) {
        return userRepository.findById(id).orElse(null);
    }

    // UPDATE
    public User updateUser(Long id, User updatedUser) {

        User emp = userRepository.findById(id).orElse(null);

        if (emp != null) {

            emp.setName(updatedUser.getName());
            emp.setEmail(updatedUser.getEmail());
            emp.setPhone(updatedUser.getPhone());

            // 🔥 NEW FIELD
            emp.setMsg(updatedUser.getMsg());

            return userRepository.save(emp);
        }

        return null;
    }

    // DELETE
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
}