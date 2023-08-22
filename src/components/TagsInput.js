import React, { useState } from 'react';
import Wrapper from '../assets/Styles/TagsInputWrapper'

const TagsInput = ()=> {

  const [tags, setTags] = useState([]);
  const [currentTag, setCurrentTag] = useState('');


  const handleTagChange = (event) => {
    setCurrentTag(event.target.value);
  };

  const handleTagKeyPress = (event) => {
    if (event.key === 'Enter' || event.key === ',') {
      event.preventDefault();

      const tagValue = currentTag.trim();
      if (tagValue !== '') {
        setTags([...tags, tagValue]);
        setCurrentTag('');
      }
    }
  };

  const removeTag = (tagToRemove) => {
    const updatedTags = tags.filter(tag => tag !== tagToRemove);
    setTags(updatedTags);
  };

  return (
    <Wrapper className="tag-input-container">
      <div className="tag-list">
        {tags.map((tag, index) => {
          return (
            <span key={index} className="tag">
              {tag}
              <span className="tag-remove" onClick={() => removeTag(tag)}>x</span>
            </span>
          );
        })}
      </div>
      <input
        type="text"
        className="tag-input"
        placeholder="Enter tags"
        value={currentTag}
        onChange={handleTagChange}
        onKeyPress={handleTagKeyPress}
      />
    </Wrapper>
  );
}

export default TagsInput;
