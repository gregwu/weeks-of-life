"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {  differenceInWeeks } from "date-fns";
import "./style.css";
const YEARS = 90; // Assuming 90 years of life expectancy
const WEEKS_PER_YEAR = 52;
//const TOTAL_WEEKS = YEARS * WEEKS_PER_YEAR;

export default function WeeksOfLife() {
  const [birthdate, setBirthdate] = useState("");
  const [weeksLived, setWeeksLived] = useState(0);

  useEffect(() => {
    if (birthdate) {
      const birthDateObj = new Date(birthdate);
      const currentDate = new Date();
      setWeeksLived(differenceInWeeks(currentDate, birthDateObj));
    }
  }, [birthdate]);

  return (
    <div className="p-6 flex flex-col items-center">
      <Card>
        <CardContent>
          <h1 className="text-xl font-bold mb-4 text-center">Weeks of {YEARS} Years Life</h1>
          <Input
            type="date"
            value={birthdate}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBirthdate(e.target.value)}
            className="mb-4 p-2 border rounded w-full"
          />
          <div className="grid grid-cols-52 gap-1">
            {Array.from({ length: YEARS }).map((_, year) => (
              <div key={year} className="flex gap-1">
                {Array.from({ length: WEEKS_PER_YEAR }).map((_, week) => {
                  const index = year * WEEKS_PER_YEAR + week;
                  return (
                    <div
                      key={index}
                      className={`w-2 h-2 border ${
                        index < weeksLived ? "bg-blue-500" : "bg-gray-200"
                      }`}
                    ></div>
                  );
                })}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
