import { useDispatch } from 'react-redux'
import cls from '../img/closeModal.svg'
import {close} from '../redux/stateSlice'
import CallBackForm from './CallBackForm'


const ModalForm = ()=>{
    const dispatch = useDispatch()
    return(
      <div className='feedback-window'>
        <button className="feedback-modal-btn" onClick={()=> dispatch(close())}>
              <img src={cls} alt=""/>
            </button>
        <div className="feedback-form-modal">
          <CallBackForm />
        </div>
        
      </div>
    )
}

export default ModalForm;