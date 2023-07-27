import React, { useState } from "react";

const FormCreatingpage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const [formValues, setFormValues] = useState({
    selectedImage,
    formtitle: "Untitled Form",
    formdiscription: "",
  });

  const handleFormDataChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("submited");
  };

  return (
    <form className="formcreatingcontainer" onSubmit={handleSubmit}>
      <div className="headerContainer">
        <div className="headerContainerleftimagecontainer">
          {selectedImage && (
            <div>
              <img src={URL.createObjectURL(selectedImage)} alt="Selected" />
            </div>
          )}
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </div>
        <div className="headerContainerrightcontainer">
          <div className="headerContainerrightcontainertop">
            <input
              type="text"
              placeholder="Enter Title"
              value={formValues.formtitle}
              name="formtitle"
              onChange={(e) => {
                handleFormDataChange(e);
              }}
              className="headerContainerrightcontainerinputtag headerContainerrightcontainerinputtag1"
            />
          </div>
          <div className="headerContainerrightcontainerbottom">
            <textarea
              type="text"
              placeholder="Enter Form description"
              className="headerContainerrightcontainerinputtag headerContainerrightcontainerinputtag2"
            />
          </div>
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormCreatingpage;
