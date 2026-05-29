package com.example.Real_Estate_Management.Repositroy;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Real_Estate_Management.Entity.User;

public interface UserRepository extends JpaRepository<User, Long> {

}
