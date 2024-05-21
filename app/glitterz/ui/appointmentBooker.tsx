'use client'

import {useState} from "react";
import DateTimePicker from "react-datetime-picker";
import "react-datepicker/dist/react-datepicker.css"

export default function AppointmentPicker() {
    const [startDate, setStartDate] = useState(new Date());
    console.log(startDate)
    return (

        <DateTimePicker value={startDate} className={"react-datetime-picker"}/>

    )
}