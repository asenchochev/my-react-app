import { useState } from "react";

export default function useValidator() {
  const [errors, setErrors] = useState({});
  const validatorHandler = (key, value, value2) => {
    if (key === "email") {
      const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

      if (!isValidEmail || value === "" || value.length > 40) {
        setErrors((state) => ({
          ...state,
          email: "Please insert a valid Email",
        }));
      } else {
        if (errors.email) {
          setErrors((state) => ({
            ...state,
            email: "",
          }));
        }
      }
    } else if (key === "password") {
      if (value === "" || value.length < 6) {
        setErrors((state) => ({
          ...state,
          password: "Password must be at least 6 characters long",
        }));
      } else {
        if (errors.password) {
          setErrors((state) => ({
            ...state,
            password: "",
          }));
        }
      }
    } else if (key === "firstName") {
      const isValid = /^[a-zA-Z]+$/.test(value);
      if (!isValid || value === "" || value.length > 40) {
        setErrors((state) => ({
          ...state,
          firstName: "Please insert a valid Name",
        }));
      } else {
        if (errors.firstName) {
          setErrors((state) => ({
            ...state,
            firstName: "",
          }));
        }
      }
    } else if (key === "lastName") {
      const isValid = /^[a-zA-Z]+$/.test(value);
      if (!isValid || value === "" || value.length > 40) {
        setErrors((state) => ({
          ...state,
          lastName: "Please insert a valid Surname",
        }));
      } else {
        if (errors.lastName) {
          setErrors((state) => ({
            ...state,
            lastName: "",
          }));
        }
      }
    } else if (key === "rePassword") {
      if (value === "" || value !== value2) {
        setErrors((state) => ({
          ...state,
          rePassword: "Passwords do not match.",
        }));
      } else {
        setErrors((state) => ({
          ...state,
          rePassword: "",
        }));
      }
    } else if (key === "title") {
      if (value === "" || value.length > 50) {
        setErrors((state) => ({
          ...state,
          title: "Title is required and must be 50 characters or less",
        }));
      } else {
        if (errors.title) {
          setErrors((state) => ({
            ...state,
            title: "",
          }));
        }
      }
    } else if (key === "mainPhoto") {
      const isValidPhoto = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(value);

      if (!isValidPhoto || value === "") {
        setErrors((state) => ({
          ...state,
          mainPhoto: "Please insert a valid link",
        }));
      } else {
        if (errors.mainPhoto) {
          setErrors((state) => ({
            ...state,
            mainPhoto: "",
          }));
        }
      }
    } else if (key === "secondPhoto") {
      const isValidPhoto = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(value);

      if (!isValidPhoto || value === "") {
        setErrors((state) => ({
          ...state,
          secondPhoto: "Please insert a valid link",
        }));
      } else {
        if (errors.secondPhoto) {
          setErrors((state) => ({
            ...state,
            secondPhoto: "",
          }));
        }
      }
    } else if (key === "thirdPhoto") {
      const isValidPhoto = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(value);

      if (!isValidPhoto || value === "") {
        setErrors((state) => ({
          ...state,
          thirdPhoto: "Please insert a valid link",
        }));
      } else {
        if (errors.thirdPhoto) {
          setErrors((state) => ({
            ...state,
            thirdPhoto: "",
          }));
        }
      }
    } else if (key === "address") {
      if (value === "" || value.length > 30) {
        setErrors((state) => ({
          ...state,
          address: "Address is required and must be 30 characters or less",
        }));
      } else {
        if (errors.address) {
          setErrors((state) => ({
            ...state,
            address: "",
          }));
        }
      }
    } else if (key === "meters") {
      const isValid = /^\d{1,4}$/.test(value);

      if (!isValid || value === "") {
        setErrors((state) => ({
          ...state,
          meters: "Meters is required and must be 4 digits or less",
        }));
      } else {
        if (errors.meters) {
          setErrors((state) => ({
            ...state,
            meters: "",
          }));
        }
      }
    } else if (key === "rooms") {
      const isValid = /^\d{1,2}$/.test(value);

      if (!isValid || value === "") {
        setErrors((state) => ({
          ...state,
          rooms: "Rooms is required and must be 2 digits or less",
        }));
      } else {
        if (errors.rooms) {
          setErrors((state) => ({
            ...state,
            rooms: "",
          }));
        }
      }
    } else if (key === "baths") {
      const isValid = /^\d{1,2}$/.test(value);

      if (!isValid || value === "") {
        setErrors((state) => ({
          ...state,
          baths: "Baths is required and must be 2 digits or less",
        }));
      } else {
        if (errors.baths) {
          setErrors((state) => ({
            ...state,
            baths: "",
          }));
        }
      }
    } else if (key === "description") {
      if (value.length > 600 || value === "") {
        setErrors((state) => ({
          ...state,
          description:
            "Description is required and must be 600 characters or less",
        }));
      } else {
        if (errors.description) {
          setErrors((state) => ({
            ...state,
            description: "",
          }));
        }
      }
    } else if (key === "types") {
      if (value === "") {
        setErrors((state) => ({
          ...state,
          types: "Please select an option. ",
        }));
      } else {
        if (errors.types) {
          setErrors((state) => ({
            ...state,
            types: "",
          }));
        }
      }
    } else if (key === "price") {
      const isValid = /^\d{1,9}$/.test(value);

      if (!isValid || value === "") {
        setErrors((state) => ({
          ...state,
          price: "Price is required and must be 9 digits or less",
        }));
      } else {
        if (errors.price) {
          setErrors((state) => ({
            ...state,
            price: "",
          }));
        }
      }
    } else if (key === "location") {
      if (value.length > 30 || value === "") {
        setErrors((state) => ({
          ...state,
          location: "Location is required and must be 30 characters or less",
        }));
      } else {
        if (errors.location) {
          setErrors((state) => ({
            ...state,
            location: "",
          }));
        }
      }
    } else if (key === "comment") {
      if (value.length > 300 || value === "") {
        setErrors((state) => ({
          ...state,
          comment: "Comment is required and must be 300 characters or less",
        }));
      } else {
        if (errors.comment) {
          setErrors((state) => ({
            ...state,
            comment: "",
          }));
        }
      }
    }
  };

  return {
    errors,
    validatorHandler,
  };
}
