// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [query, setQuery] = useState("");

//   const date = new Date();
//   const hr = date.getHours();
//   const min = date.getMinutes();
//   const sec = date.getSeconds();
//   const longDate = date.toDateString().slice(3);

//   var day;

//   switch (new Date().getDay()) {
//     case 0:
//       day = "Sunday";
//       break;
//     case 1:
//       day = "Monday";
//       break;
//     case 2:
//       day = "Tuesday";
//       break;
//     case 3:
//       day = "Wednesday";
//       break;
//     case 4:
//       day = "Thursday";
//       break;
//     case 5:
//       day = "Friday";
//       break;
//     case 6:
//       day = "Saturday";
//   }

//   const handleSubmit = (e) => {
//     console.log(query);
//     const gquery = query.slice(1);
//     e.preventDefault();
//     if (query === "y") {
//       window.location.replace("https://youtube.com/");
//     } else if (query === "5") {
//       window.location.replace("http://localhost:5173/");
//     } else if (query === "3") {
//       window.location.replace("http://localhost:3000/");
//     } else if (query === "g") {
//       window.location.replace("https://google.com/");
//     } else if (query === "s") {
//       window.location.replace("https://open.spotify.com/");
//     } else if (query === "v") {
//       window.location.replace("https://vercel.com/");
//     } else if (query === "c") {
//       window.location.replace("https://canva.com/");
//     } else if (query === "gh") {
//       window.location.replace("https://github.com/");
//     } else {
//       window.location.replace(
//         query[0] == "g"
//           ? `https://search.google.com/search?q=${gquery}&source=desktop`
//           : `https://search.brave.com/search?q=${query}&source=desktop`
//       );
//     }
//   };

//   const handleChange = (e) => {
//     setQuery((prev) => e.target.value.toLowerCase());
//   };

//   const handlekey = (e) => {
//     console.log(query);
//     if (e.key === "Enter") {
//       console.log("dba bro");
//     }
//   };

//   return (
//     <div className="container">
//       <div className="greet">
//         <h1 className="welcome sel">Welcome Siddharth</h1>
//         <h3 className="day sel">{day}</h3>
//         <h3 className="date sel">{longDate}</h3>
//         <div className="time sel">
//           <span className="sel">{hr}</span>
//           <span className="sel">{min}</span>
//         </div>
//       </div>
//       <form className="form" onSubmit={handleSubmit}>
//         <input
//           type="text"
//           autoFocus
//           placeholder="Search"
//           className="input"
//           onKeyDown={handlekey}
//           onChange={handleChange}
//         />
//         <button type="submit" className="btn">
//           Search
//         </button>
//       </form>
//     </div>
//   );
// }

// export default App;

import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [enter, setEnter] = useState("false");

  const date = new Date();
  const hr = date.getHours().toString();
  const min = date.getMinutes().toString();
  const sec = date.getSeconds();
  const longDate = date.toDateString().slice(3);
console.log(min.length)
  var day;

  switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }

  useEffect(() => {
    if (query.length > 0) handleSearch()
  }, [enter]);

  const handleSearch = () => {
    const gquery = query.slice(1);
    if (query === "y") {
      window.location.replace("https://youtube.com/");
    } else if (query === "5") {
      window.location.replace("http://localhost:5173/");
    } else if (query === "3") {
      window.location.replace("http://localhost:3000/");
    } else if (query === "g") {
      window.location.replace("https://google.com/");
    } else if (query === "s") {
      window.location.replace("https://open.spotify.com/");
    } else if (query === "v") {
      window.location.replace("https://vercel.com/");
    } else if (query === "c") {
      window.location.replace("https://canva.com/");
    } else if (query === "gh") {
      window.location.replace("https://github.com/");
    } else {
      window.location.replace(
        query[0] == "g"
          ? `https://search.google.com/search?q=${gquery}&source=desktop`
          : `https://search.brave.com/search?q=${query}&source=desktop`
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    if (enter) {
      setQuery(e.target.value.toLowerCase());
    }
  };

  const handlekey = (e) => {
    if (e.key === "Enter") {
      setEnter(true);
    }
  };

  return (
    <div className="container">
      <div className="greet">
        <h1 className="welcome sel">Welcome Siddharth</h1>
        <h3 className="day sel">{day}</h3>
        <h3 className="date sel">{longDate}</h3>
        <div className="time sel">
          <span className="sel">{hr.length === 1 ? '0'+hr : hr}</span>
          <span className="sel">{min.length === 1 ? '0'+min : min}</span>
        </div>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <textarea
          type="text"
          autoFocus
          placeholder="Search"
          className="input"
          onKeyDown={handlekey}
          onChange={handleChange}
        />
        <button type="submit" className="btn">
          Search
        </button>
      </form>
    </div>
  );
}

export default App;
