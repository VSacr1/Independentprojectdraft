package com.qa.model;

import java.beans.Transient;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.validation.constraints.NotNull;

import org.hibernate.annotations.NaturalId;

@Entity
public class ToDo {

		@GeneratedValue(strategy = GenerationType.IDENTITY)
		@Id

		private Long id; 
		
		private String item; 

		private String dateSet; 
		
		private boolean isComplete; 
		
//		@ManyToOne
//		private Set<User> roles;
		
		public ToDo()
		{
			
		}

		public ToDo(String item, boolean isComplete, String dateSet)
		{
			this.item = item; 
			this.isComplete = isComplete; 
			this.dateSet = dateSet; 
			
			
		}

		public boolean isComplete() {
			return isComplete;
		}

		public void setComplete(boolean isComplete) {
			this.isComplete = isComplete;
		}

		public Long getId() {
			return id;
		}

		public void setId(Long id) {
			this.id = id;
		}

		public String getItem() {
			return item;
		}

		public void setItem(String item) {
			this.item = item;
		}
		
		public String getDateSet() {
			return dateSet;
		}

		public void setDateSet(String dateSet) {
			this.dateSet = dateSet;
		}
		
//		public Set<User> getUser()
//		{
//			return roles; 
//		}
		
		
}
