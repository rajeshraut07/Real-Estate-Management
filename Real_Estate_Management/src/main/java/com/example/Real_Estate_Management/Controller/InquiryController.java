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

import com.example.Real_Estate_Management.Entity.Inquiry;
import com.example.Real_Estate_Management.Service.InquiryService;

@RestController
@RequestMapping("/inquiry")

public class InquiryController {
	@Autowired

	private InquiryService service3;

	@PostMapping
	public Inquiry create(@RequestBody Inquiry inquiry) {
		return service3.createinquiry(inquiry);
	}

	@GetMapping
	public List<Inquiry> readAll() {
		return service3.getAllInquiry();
	}

	@GetMapping("/{id}")
	public Inquiry readById(@PathVariable Long id) {
		return service3.getInquiryById(id);
	}

	@PutMapping("/{id}")
	public Inquiry update(@PathVariable Long id, @RequestBody Inquiry inquiry) {
		return service3.updateInquiry(id, inquiry);
	}

	@DeleteMapping("/{id}")
	public String delete(@PathVariable Long id) {
		service3.deleteInquiry(id);

		return "Delete inquiry with id" + id;
	}

}
