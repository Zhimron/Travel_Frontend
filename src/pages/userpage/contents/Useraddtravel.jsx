import React, {useState} from 'react'
import Inputs from '../../../components/Input';
import Buttons from '../../../components/Button';

const Useraddtravel = () => {
  const [formData,setFormData] = useState({
    place:'',
    from:'',
    to:'',
    experience:'',
  })

    return (
      <div className="flex flex-col ml-[110px]">
        <div className="w-[300px]">
          <h1 className="text-2xl font-[Montserrat] mb-5">Input Your Travel</h1>
          <div className="bg-red-50 rounded-sm p-5">
            <form onSubmit="">
              <div>
                <Inputs id="place" label="Place" type="text" />
              </div>
              <div className="mt-5">
                <Inputs id="from" label="From" type="text" />
              </div>
              <div className="mt-5">
                <Inputs id="to" label="To" type="text" />
              </div>
              <div className="mt-5">
                <Inputs
                  id="experience"
                  label="Experience"
                  type="text"
                  rows="5"
                />
              </div>
              <div>
                <label >Image:</label>
                <input
                  id="image"
                  type="file"
             
                  accept="image/*"
                />
              </div>

              <div className="mt-5">
                <Buttons label="Log" bgcolor="#41644A" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
}
 export default Useraddtravel;