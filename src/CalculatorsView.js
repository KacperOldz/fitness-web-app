import React, { useState } from "react";
import "./calculatorView.css"
import NumberInput from "./NumberInput";
import SliderInput from "./SliderInput";
import { Typography } from "@mui/material";


function CalculatorsView() {
    const [heightValue, setHeightValue] = useState(170);
    const [weightValue, setWeightValue] = useState(60);
    const [ageValue, setAgeValue] = useState(18);
    const [bmiValue, setBmiValue] = useState('');
    const [calorieValue, setCalorieValue] = useState('');

    const marksHeight = [
      { value: 100, label: '100' },
      { value: 150, label: '150' },
      { value: 200, label: '200' },
      { value: 250, label: '250' },
    ];

    const marksWeight = [
      { value: 20, label: '20' },
      { value: 50, label: '50' },
      { value: 100, label: '100' },
      { value: 150, label: '150' },
    ];

    const marksAge = [
      { value: 12, label: '12' },
      { value: 18, label: '18' },
      { value: 25, label: '25' },
      { value: 50, label: '50' },
      { value: 75, label: '75' },
      { value: 100, label: '100' },
    ];

    const handleHeightChange = (value) => {
      setHeightValue(value);
      calculateBmiAndCalories();
    }

    const handleWeightChange = (value) => {
      setWeightValue(value);
      calculateBmiAndCalories();
    }

    const handleAgeChange = (value) => {
      setAgeValue(value);
      calculateBmiAndCalories();
    }


    const calculateBmiAndCalories = () => {
       if (heightValue && weightValue && ageValue) {
         const heightInMeters = heightValue / 100;
         const bmi = (weightValue / (heightInMeters * heightInMeters)).toFixed(2);
         setBmiValue(bmi);
   
         const estimatedCalories = (10 * weightValue + 6.25 * heightValue - 5 * ageValue + 5).toFixed(0);
         setCalorieValue(estimatedCalories);
       }
    };
   

    return (
      <div id="right-panel" style={{ padding: "2%", width: "91%", color: "white"}}>
        <h1>BMI and Calorie Calculator</h1>
        <div style={{ display: "flex", height: "500px"}}>

          <div style={{width: "20%", marginLeft: "20%", height: "100%"}}>
            <Typography>Height:</Typography>
            <SliderInput
              label="Height:"
              value={heightValue}
              onChange={handleHeightChange}
              min={100}
              max={250}
              marks={marksHeight}
              step={1}
            />
          </div>

          <div style={{width: "20%", textAlign: "center"}}>
            <Typography>Weight:</Typography>
            <SliderInput
              label="Height:"
              value={weightValue}
              onChange={handleWeightChange}
              min={25}
              max={150}
              marks={marksWeight}
              step={1}
            />
          </div>

          <div style={{width: "20%", textAlign: "center"}}>
            <Typography>Age:</Typography>
            <SliderInput
              label="Height:"
              value={ageValue}
              onChange={handleAgeChange}
              min={12}
              max={100}
              marks={marksAge}
              step={1}
            />
          </div>
          
        </div>

        <div style={{color: "white", fontSize: "150%", marginTop: "5%"}}>
          <p>Your BMI: <span>{bmiValue}</span></p>
          <p>Estimated Daily Calories: <span>{calorieValue}</span></p>
        </div>
      </div>
    );
}

export default CalculatorsView;
