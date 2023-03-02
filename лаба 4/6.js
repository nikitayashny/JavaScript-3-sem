function volume (length)
{
    return (width) => 
    {
        return (hight) => 
        {
            return length * width * hight;
        }
    }
  
}

const length = volume(1); 

alert(`Объёма параллелепипеда 1 равен ${length(2)(3)}`);
alert(`Объёма параллелепипеда 2 равен ${length(4)(5)}`);
alert(`Объёма параллелепипеда 3 равен ${length(6)(7)}`);
