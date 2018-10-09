import React from "react";

const Contact = (props) => {
  setTimeout(() => {
    props.history.push('/about')
  }, 2000);
  return (
    <div className="container">
      <h4 className="center">Contact</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dolores
        ducimus quae, labore perspiciatis minima officiis accusamus! Illum
        consequuntur quibusdam minima explicabo dicta voluptatibus quae
        perspiciatis, eos quos deserunt sunt.
      </p>
    </div>
  )
}

export default Contact