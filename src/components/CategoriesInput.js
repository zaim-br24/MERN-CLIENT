import React from 'react';
import Wrapper from '../assets/Styles/CategoriesInputWrapper';
const categories = ['Technology', 'Science', 'Art', 'Sports', 'Food', 'Travel'];

const CategoriesInput = ({handleCategoryChange, selectedCategory})=> {
    
      return (
        <Wrapper className="category-input-container">
          <select
            className="category-select"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="">Select a category</option>
            {categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </Wrapper>
      );
}

export default CategoriesInput;
