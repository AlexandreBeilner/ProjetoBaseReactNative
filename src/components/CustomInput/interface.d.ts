import React, { useState } from "react";

export interface CustomInputProps{
  placeHolder: string
  value: string
  onChangeText: React.Dispatch<React.SetStateAction<string>>
  isPassword?: boolean
}
