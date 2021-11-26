async function commentFormHandler(event) {
    event.preventDefault();
  
    const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();
  
    const post_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  
    if (comment_text) {
        const response = await fetch('/api/comments', {
          method: 'POST',
          body: JSON.stringify({
            post_id,
            comment_text
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
      
        if (response.ok) {
          document.location.reload();
        } else {
          alert(response.statusText);
        }
    }
}


//COME BACK TO EDIT AND DELETE COMMENT BUTTONS

// async function editFormHandler(event) {
//   event.preventDefault();

//   const comment_text = document.querySelector('textarea[name="post-text"]').value.trim();
  
//   const id = await fetch(`api/comments`, {
//     method: 'GET',
//     comment_text: `${comment_text}`

//   })
  

//   const response = await fetch(`/api/comments/${id}`, {
//       method: 'PUT',
//       body: JSON.stringify({
//           title,
//           post_text
//       }),
//       headers: {
//       'Content-Type': 'application/json'
//       }
//   });

//   if (response.ok) {
//       document.location.replace('/dashboard/');
//   } else {
//       alert(response.statusText);
//   }
// }

// async function deleteFormHandler(event) {
//   event.preventDefault();
  
//   const id = window.location.toString().split('/')[
//       window.location.toString().split('/').length - 1
//   ];
//   const response = await fetch(`/api/comments/${id}`, {
//       method: 'DELETE'
//   });
  
//   if (response.ok) {
//   document.location.replace('/dashboard/');
//   } else {
//   alert(response.statusText);
//   }
// }

// document.querySelector('.delete-comment').addEventListener('click', deleteFormHandler);

// document.querySelector('.edit-comment').addEventListener('click', editFormHandler);
  
document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);