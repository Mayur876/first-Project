

// |||||||  Task 01  |||||||


// import { useState } from 'react';
// import './App.css'

// function App() {
//   const [count,setCount] = useState(0)
//   // let count = 0;

//   return (

//     <div style={{textAlign: 'center'}}>
//       <h1>{count}</h1>
//       <button style={{
//           width: '10%',
//           padding: '2px',
//           fontSize: '15px',
//           color: '#070606',
//           backgroundColor: '#00f3f3',
//           border: 'none',
//           borderRadius: '2px',
          
//         }}
//         onClick={()=> {
//           setCount(count+1)
//       }}
//       >
      
//         Increment
//       </button>
      
//       <button style={{
//           width: '10%',
//           padding: '2px',
//           fontSize: '15px',
//           color: '#fff',
//           backgroundColor: '#0070f3',
//           border: 'none',
//           borderRadius: '2px',
          
//         }}
//         onClick={()=> {
//           setCount(count - 1)
//         }}
//         >
//           Decrement
//         </button>
//     </div>
//   )
// }




                  // Task 02







import React, { useState } from 'react';

export default function LiveSyncInput() {
  const [text, setText] = useState('');

  return (
    <div style={{ maxWidth: '400px', margin: '40px auto', fontFamily: 'sans-serif' }}>
      <div 
        htmlFor="sync-input" 
        style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}
      >
        Type something:
      </div>
      
      <input
        id="sync-input"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Start typing..."
        style={{
          width: '100%',
          padding: '10px',
          fontSize: '16px',
          borderRadius: '6px',
          border: '1px solid #e02727',
          boxSizing: 'border-box'
        }}
      />

      <div 
        style={{ 
          marginTop: '20px', 
          color: 'white',
          padding: '15px', 
          backgroundColor: '#d49dd8', 
          borderRadius: '6px',
          minHeight: '24px' 
        }}
      >
        <strong><b></b></strong> {text || <em>Nothing typed yet...</em>}
      </div>
    </div>
  );
}



              // Task 03







// import React, { useState } from 'react';

// export default function SimpleForm() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(`Submitted:\nName: ${formData.name}\nEmail: ${formData.email}`);
//   };

//   return (
//     <form 
//       onSubmit={handleSubmit} 
//       style={{
//         maxWidth: '400px', 
//         margin: '40px auto', 
//         padding: '20px',
//         border: '1px solid #e0e0e0',
//         borderRadius: '8px',
//         fontFamily: 'sans-serif'
//       }}
//     >
//       <h2 style={{ marginTop: 2, marginBottom: '30px' }}>Contact Form</h2>

//       <div style={{ marginBottom: '15px' }}>
//         <label 
//           htmlFor="name" 
//           style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}
//         >
//           Name:
//         </label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           placeholder="Enter your name"
//           required
//           style={{
//             width: '100%',
//             padding: '8px',
//             fontSize: '14px',
//             borderRadius: '4px',
//             border: '1px solid #ccc',
//             boxSizing: 'border-box'
//           }}
//         />
//       </div>

//       <div style={{ marginBottom: '20px' }}>
//         <label 
//           htmlFor="email" 
//           style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}
//         >
//           Email:
//         </label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           placeholder="Enter your email"
//           required
//           style={{
//             width: '100%',
//             padding: '8px',
//             fontSize: '15px',
//             borderRadius: '5px',
//             border: '1px solid #ccc',
//             boxSizing: 'border-box'
//           }}
//         />
//       </div>

//       <button
//         type="submit"
//         style={{
//           width: '100%',
//           padding: '10px',
//           fontSize: '16px',
//           color: '#fff',
//           backgroundColor: '#0070f3',
//           border: 'none',
//           borderRadius: '4px',
//           cursor: 'pointer'
//         }}
//       >
//         Submit
//       </button>
//     </form>
//   );
// }


// export default App

