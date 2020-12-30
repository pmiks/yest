export const requiredField=value=>{
  if (value) return undefined;
  return 'Заполните поле';
}

export const maxLength30=value=>{
  if (value && value.length>30) return "Максимальная длина поля 30 символов";
  return undefined;
}

export const maxLengthCreator=(maxLenght)=>{
return (value)=>{
  if (value && value.length>maxLenght) return `Максимальная длина поля ${maxLenght} символов`;
  return undefined;
}
}
