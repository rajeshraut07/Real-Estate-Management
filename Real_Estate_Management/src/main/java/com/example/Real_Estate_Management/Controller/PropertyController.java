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

import com.example.Real_Estate_Management.Entity.Property;
import com.example.Real_Estate_Management.Service.PropertyService;

@RestController
@RequestMapping("/properties")
public class PropertyController {
	@Autowired

	private PropertyService service2;

	@PostMapping
	public Property create(@RequestBody Property prop) {
		return service2.createproperty(prop);
	}

	@GetMapping
	public List<Property> readAll() {
		return service2.getAllProperty();
	}

	@GetMapping("/{id}")
	public Property readById(@PathVariable Long id) {
		return service2.getPropertyById(id);
	}

	@PutMapping("/{id}")
	public Property update(@PathVariable Long id, @RequestBody Property prop) {
		return service2.updateProperty(id, prop);
	}

	@DeleteMapping("/{id}")

	public String delete(@PathVariable Long id) {
		service2.deleteProperty(id);

		return "Delete Property with id" + id;
	}

}
