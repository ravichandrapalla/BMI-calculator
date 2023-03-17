import React, { useState } from "react";

function BMICalculator() {
  const [age, setAge] = useState(30);
  const [gender, setGender] = useState("male");
  const [height, setHeight] = useState(60);
  const [weight, setWeight] = useState(60);
  const [bmiValue, setBmiValue] = useState(null);
  const [bmiCategory, setBmiCategory] = useState(null);

  function calculateBMI() {
    const heightInMeters = height / 39.37; // converting height from inches to meters
    const bmi = weight / heightInMeters ** 2; // calculating BMI value
    setBmiValue(bmi.toFixed(2)); // setting BMI value with 2 decimal points

    if (gender === "male") {
      //checking for category
      if (bmi < 18.5) {
        setBmiCategory("Underweight");
      } else if (bmi >= 18.5 && bmi <= 24.9) {
        setBmiCategory("Normal weight");
      } else if (bmi >= 25 && bmi <= 29.9) {
        setBmiCategory("Overweight");
      } else {
        setBmiCategory("Obesity");
      }
    } else {
      if (bmi < 20.5) {
        setBmiCategory("Underweight");
      } else if (bmi >= 20.5 && bmi <= 26.9) {
        setBmiCategory("Normal weight");
      } else if (bmi >= 27 && bmi <= 31.9) {
        setBmiCategory("Overweight");
      } else {
        setBmiCategory("Obesity");
      }
    }
  }

  return (
    <div>
      <label>Age:</label>
      <input
        type="number"
        min="2"
        max="100"
        value={age}
        onChange={(event) => setAge(event.target.value)}
      />
      <br />
      <label>Gender:</label>
      <select
        value={gender}
        onChange={(event) => setGender(event.target.value)}
      >
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <br />
      <label>Height (in):</label>
      <input
        type="number"
        min="24"
        max="96"
        step="0.01"
        value={height}
        onChange={(event) => setHeight(event.target.value)}
      />
      <br />
      <label>Weight (kg):</label>
      <input
        type="number"
        step="0.01"
        value={weight}
        onChange={(event) => setWeight(event.target.value)}
      />
      <br />
      <button onClick={calculateBMI}>Compute</button>
      {bmiValue && (
        <div>
          <p>BMI value: {bmiValue}</p>
          <p>BMI category: {bmiCategory}</p>
        </div>
      )}
    </div>
  );
}
export default BMICalculator;
