import React, { useState } from 'react';
import { useLoaderData, useParams, useNavigate } from 'react-router-dom';
import { Button, Label, Select, Textarea, TextInput } from 'flowbite-react';

const EditBooks = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL } = useLoaderData();
  
  const bookCategories = [
    "Fiction", "Non-Fiction", "Mistery", "Programming", "Science Fiction", "Fantasy", "Horror",
    "Bibliography", "Autobiography", "History", "Self-help", "Memoir", "Business", "Romance", 
    "Children books", "Travel", "Religion", "Art and Design"
  ];

  const [selectedBookCategory, setSelectedBookCategory] = useState(category);

  const handleChangeSelectedValue = (event) => {
    setSelectedBookCategory(event.target.value);
  }

  //handle book submission
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.categoryName.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;

    const updateBookObj = {
      bookTitle,
      authorName,
      imageURL,
      category,
      bookDescription,
      bookPDFURL
    }

    //update book data
    fetch(`http://localhost:3000/book/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(updateBookObj)
    }).then(res => res.json()).then(data => {
      alert("Book updated successfully!!!");
      navigate('/admin/dashboard/manage');
    })
  }

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Update a Book</h2>

      <form onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-col gap-4 flex-wrap">
        {/* 1st row */}
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput id="bookTitle" name='bookTitle' type="text" placeholder="Book name" required defaultValue={bookTitle} />
          </div>
          {/* author name */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput id="authorName" name='authorName' type="text" placeholder="Author Name" required defaultValue={authorName} />
          </div>
        </div>
        {/* 2nd row */}
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Book Image URL" />
            </div>
            <TextInput id="imageURL" name='imageURL' type="URL" placeholder="Book Image URL" required defaultValue={imageURL} />
          </div>
          {/* category */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Category" />
            </div>
            <Select id='inputState' name="categoryName" className='w-full-rounded' value={selectedBookCategory} onChange={handleChangeSelectedValue}>
              {bookCategories.map((option) => <option key={option} value={option}>{option}</option>)}
            </Select>
          </div>
        </div>
        {/* 3rd row */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookDescription" value="Book Description" />
          </div>
          <Textarea id="bookDescription" name="bookDescription" placeholder='Write Your Book Description..' required rows={4} className='w-full' defaultValue={bookDescription} />
        </div>
        {/* book pdf link */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookPDFURL" value="book PDF URL" />
          </div>
          <TextInput id="bookPDFURL" name="bookPDFURL" type="text" placeholder="Book PDF URL" required defaultValue={bookPDFURL} />
        </div>
        <div className='text-center'>
          <Button type="submit" className='mt-5 bg-teal-950 text-white'>Update Book</Button>
        </div>
      </form>
    </div>
  )
}

export default EditBooks;
