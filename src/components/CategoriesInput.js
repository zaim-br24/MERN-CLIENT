import React, { useState } from 'react';
import Wrapper from '../assets/Styles/CategoriesInputWrapper';
const categories = ['Technology', 'Science', 'Art', 'Sports', 'Food', 'Travel'];

const CategoriesInput = ()=> {
    const [selectedCategory, setSelectedCategory] = useState('');
    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
      };
    
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
          {selectedCategory && (
            <div className="selected-category">
              <p>Selected Category: {selectedCategory}</p>
            </div>
          )}
        </Wrapper>
      );
}

export default CategoriesInput;
