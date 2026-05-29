package com.example.Real_Estate_Management.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Real_Estate_Management.Entity.Property;
import com.example.Real_Estate_Management.Repositroy.PropertyRepository;

@Service
public class PropertyService {
	
	@Autowired
	
	private PropertyRepository  propertyrepo;
	
	public Property createproperty(Property property)
	{
		return propertyrepo.save(property);
	}
	
	public List<Property> getAllProperty() {
		
		return propertyrepo.findAll();
	}
	
	public Property getPropertyById(Long id) {
		
		return propertyrepo.findById(id).orElse(null);
	}
	
	  public Property updateProperty(Long id, Property updatedproperty)
	  {
		  Property prop  = propertyrepo.findById(id).orElse(null);
		  
		  if(prop!=null)
		  {
			  prop.setTitle(updatedproperty.getTitle());
			  prop.setDescription(updatedproperty.getDescription());
			  prop.setPrice(updatedproperty.getPrice());
			  prop.setLocation(updatedproperty.getLocation());
			  prop.setProperyType(updatedproperty.getProperyType());
			  prop.setBedrooms(updatedproperty.getBedrooms());
			  prop.setBathrooms(updatedproperty.getBathrooms());
			  prop.setArea(updatedproperty.getArea());
			  prop.setImageurl(updatedproperty.getImageurl());
			  prop.setStatus(updatedproperty.getStatus());
			  
		      return propertyrepo.save(prop);
		  }
		  
		 return null;
	  }
	  
	   public void deleteProperty(Long id)
	   {
		   propertyrepo.deleteById(id);
	   }
	
	

}
