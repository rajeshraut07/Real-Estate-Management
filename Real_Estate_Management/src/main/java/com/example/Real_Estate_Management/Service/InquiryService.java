package com.example.Real_Estate_Management.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Real_Estate_Management.Entity.Inquiry;
import com.example.Real_Estate_Management.Repositroy.InquiryRepository;


@Service
public class InquiryService {
	@Autowired
	
	
	private InquiryRepository inquiryrepo;
	
	public Inquiry createinquiry(Inquiry inquiry)
	{
		return inquiryrepo.save(inquiry);
	}
	
	public List<Inquiry> getAllInquiry()
	{
		return inquiryrepo.findAll();
	}
	
	
	public Inquiry getInquiryById(Long id)
	{
		return inquiryrepo.findById(id).orElse(null);
	}
	
	public Inquiry updateInquiry(Long id, Inquiry updatedinquiry)
	{
		Inquiry inq = inquiryrepo.findById(id).orElse(null);
		
		if(inq!=null)
		{
			inq.setCustomerName(updatedinquiry.getCustomerName());
			inq.setCustomerEmail(updatedinquiry.getCustomerEmail());
			inq.setMessage(updatedinquiry.getMessage());
			inq.setInquiryDate(updatedinquiry.getInquiryDate());
			
			return inquiryrepo.save(inq);
		}
		
		return null;
	}
	
	 public void deleteInquiry(Long id)
	 {
		 inquiryrepo.deleteById(id);
	 }
	
	

}
