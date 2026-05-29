package com.example.Real_Estate_Management.Controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Real_Estate_Management.Entity.User;
import com.example.Real_Estate_Management.Service.UserService;

@RestController
@RequestMapping("/users")
public class UserController {
	@Autowired
	
	private UserService service1;

	
	@PostMapping
	public User create(@RequestBody User emp)
	
	{
		 System.out.println("🔥 Data from React: " + emp);
		return service1.createUser(emp);
	}
	
	@GetMapping
	public List<User> readAll() {
		return service1.getAllUser();
	}
	
	@GetMapping("/{id}")
	public User readById(@PathVariable Long id)
	{
		return service1.getUserById(id);
	}
	
	@PutMapping("/{id}")
	public User update(@PathVariable Long id,@RequestBody User emp)
	{
		 return service1.updateUser(id, emp);
	}
	
	@DeleteMapping("/{id}")
	public String delete(@PathVariable Long id)
	{
		service1.deleteUser(id);
		
		return "Delete User with id"+id;
	}
	
	
}
