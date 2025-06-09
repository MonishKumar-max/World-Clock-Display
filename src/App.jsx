import React, { useState, useEffect } from "react";

const App = () => {
  const [Time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  const Gethours = Time.getHours(); // Returns hours (0-23)
  const Getminutes = Time.getMinutes(); // Returns minutes (0-59)
  const Getseconds = Time.getSeconds(); // Returns seconds (0-59)

  const hours=Gethours.toString().padStart(2, '0');
  const minutes=Getminutes.toString().padStart(2, '0')
  const seconds=Getseconds.toString().padStart(2, '0')

  return (
    <>
      <div style={{fontFamily:"Orbitron",fontWeight:700,color:'black',fontSize:150,width:800,margin:'auto'}}>
        {`${hours}:${minutes}:${seconds}`}
      </div>
    </>
  );
};

export default App;
