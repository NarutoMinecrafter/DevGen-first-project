import React, { useState } from 'react'
import { useMediaQuery } from 'nc-one-react-helpers'

import logo from './images/logo.png'
import CreateNew from './images/CreateNew.png'
import CreateNewMobile from './images/CreateNewMobile.png'
import president from './images/president.png'
import faceScan from './images/faceScan.png'
import merge from './images/merge.png'
import timeImg from './images/time.png'
import face from './images/face.png'
import calendar from './images/calendar.png'
import Bitcoin from './images/Bitcoin.png'
import discord from './images/discord.png'
import telegram from './images/telegram.png'
import selectImage from './images/selectImage.png'

import './styles/index.sass'
import { getJSDocReturnType } from 'typescript'
import { Modal, Callout } from '@fluentui/react'

const initialCards = [
  { title: 'Stage 1', text: 'We develop, test and launch systems: NFT- token generation, crossbreeding and creation of new presidents.', date: '10.06.2021' },
  { title: 'Stage 2', text: 'Official start of the project. We open sales of NFT- tokens and start training the first presidents.', date: '16.06.2021' },
  { title: 'Stage 3', text: 'We create a virtual map of the states. We are building economic, political, social and military systems of interaction between countries.', date: '01.07.2021' }
]

const initialSelectImages = [selectImage, selectImage, selectImage, face, face, face, selectImage, face, selectImage, face, selectImage, face, selectImage, face, selectImage, face]

export const App = () => {
  const [time, setTime] = useState('23:10')
  const [balance, setBalance] = useState('100 eth')
  const [cards, setCards] = useState(initialCards)
  const [selectImages, setSelectImages] = useState(initialSelectImages)
  const [selectedImage1, setSelectedImage1] = useState('')
  const [selectedImage2, setSelectedImage2] = useState('')
  const [imageSelector, setImageSelector] = useState<number>()
  const [slideItem, setSlideItem] = useState(1)
  const [showQuestionCallout, setShowQuestionCallout] = useState(false)
  console.log(showQuestionCallout)

  const matches = useMediaQuery('(min-width: 700px)')
  const matches1000 = useMediaQuery('(min-width: 1000px)')


  let selectImages2D = [];
  let size = matches1000 ? 3 : matches ? 2 : 1;
  for (let i = 0; i < Math.ceil(selectImages.length / size); i++) {
    selectImages2D[i] = selectImages.slice((i * size), (i * size) + size);
  }

  return (
    <div className='app' >
      <header className='header' >
        <img src={logo} alt='logo' />
      </header>
      <main className='main' >
        <div className='main__content'>
          {matches ? <img src={CreateNew} alt='Create new' /> : <img src={CreateNewMobile} alt='Create new' />}
          <img src={president} alt='president' />
          <div className='main__left-content'>
            {/* <div className='main__selectors-time'>
              <div className='main__selectors'>
                <div className='main__selector' onClick={() => setImageSelector(1)} >
                  {selectedImage1 ? <div className='main__selector_img' style={{backgroundImage: `url(${selectedImage1})`}} /> : <img src={faceScan} alt='select' />}
                  {matches && <p>select</p>}
                </div>
                <div className='main__merge'>
                  <img src={merge} alt='merge' />
                  {matches && <p>merge</p>}
                </div>
                <div className='main__selector' onClick={() => setImageSelector(2)} >
                  {selectedImage2 ? <div className='main__selector_img' style={{backgroundImage: `url(${selectedImage2})`}} /> : <img src={faceScan} alt='select' />}
                  {matches && <p>select</p>}
                </div>
              </div>
              {matches && <div className='main__time'>
                <img src={timeImg} alt='time' />
                <p>{time}</p>
              </div>}
            </div>
            <div className='main__balance'>
              <p>{matches && 'Balance: '}{balance}</p>
              <p className='main__balance-time'>{!matches && time}</p>
              <div className='main__balance-question' id='question-target' onMouseEnter={() => setShowQuestionCallout(true)} />
            </div>
            {showQuestionCallout && <Callout target='#question-target' className='question-callout' onDismiss={() => setShowQuestionCallout(false)} >
              <p>It will take us 24 hours to train the new president. During this period, you cannot transfer NFT-tokens to other wallets. Otherwise, the process of creating a president is reset forever. As soon as the president takes office, the tokens will be available for withdrawal.</p>
            </Callout>}
            <p className='tokens-info' >You need 2 NFT to start created new tokens</p> */}
          </div>
        </div>
        <div className='main__face-shadow' />
        <div className='main__face' />
      </main>
      <div className='road-map'>
        <h1>Road map</h1>
        <div className='road-map__cards'>
          {cards.map((card, index) => {
            return (
              <div key={index} className='card'>
                <div className='card__body'>
                  <b>{card.title}</b>
                  <p>{card.text}</p>
                  <div className='card__date' >
                    <img src={calendar} alt='calendar' />
                    <p>{card.date}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className='footer'>
        <div className='footer__text'>© 2021 NewGovernment</div>
        <div className='footer__links'>
          {/* <img src={Bitcoin} alt='Bitcoin' /> */}
          <a href='https://discord.gg/NQN3ccb8ta' target='_blank' >
            <img src={discord} alt='discord' />
          </a>
          {/* <img src={telegram} alt='telegram' /> */}
        </div>
        <div className='footer__text'>by CryptoPanteon</div>
      </div>
      <Modal className='select-image-modal' isOpen={!!imageSelector} isBlocking={false} onDismiss={() => setImageSelector(undefined)} >
        <div className='select-image-modal__images'>
          {selectImages2D[slideItem - 1].map((image, index) => <div className='select-image-modal__img' key={index} style={{ backgroundImage: `url(${image})` }} onClick={() => {
            imageSelector === 1 ? setSelectedImage1(image) : setSelectedImage2(image)
            setImageSelector(undefined)
          }} />)}
        </div>
        <div className='select-image-modal__paginator'>
          <div className='select-image-modal__paginator_icon'>
            <svg width="21" height="11" viewBox="0 0 21 11" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => slideItem !== 1 && setSlideItem(prevSlideItem => prevSlideItem - 1)}>
              <path d="M0.121653 5.815L4.7882 10.0685C4.91786 10.1738 5.0596 10.1941 5.21356 10.1293C5.36735 10.0644 5.44457 9.94697 5.44457 9.77675V7.05451L20.6111 7.05451C20.7246 7.05451 20.8178 7.01812 20.8906 6.9452C20.9634 6.87233 21 6.77911 21 6.66572V4.33245C21 4.21909 20.9636 4.12587 20.8907 4.05309C20.8177 3.98022 20.7245 3.94382 20.6112 3.94382L5.44448 3.94382L5.44448 1.22163C5.44448 1.05937 5.36714 0.941973 5.21344 0.869271C5.05935 0.804188 4.9176 0.828792 4.78795 0.941973L0.121397 5.24437C0.0403938 5.32533 0 5.42238 0 5.5359C0 5.64095 0.0406494 5.734 0.121653 5.815Z" fill={slideItem !== 1 ? "#008FBC" : "#C4C4C4"} />
            </svg>
          </div>
          {selectImages2D.map((_, index) => <p key={index} className={slideItem === index+1 ? 'select-image-modal__paginator_selected' : undefined} onClick={() => setSlideItem(index+1)} >{index+1}</p>)}
          <div className='select-image-modal__paginator_icon'>
            <svg width="21" height="11" viewBox="0 0 21 11" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => slideItem !== selectImages2D.length && setSlideItem(prevSlideItem => prevSlideItem + 1)}>
              <path d="M20.8783 5.185L16.2118 0.931466C16.0821 0.826159 15.9404 0.805897 15.7864 0.870725C15.6326 0.935637 15.5554 1.05303 15.5554 1.22325V3.94549H0.388879C0.2754 3.94549 0.182181 3.98188 0.109351 4.0548C0.0365639 4.12767 0 4.22089 0 4.33428V6.66755C0 6.78091 0.0363936 6.87413 0.109309 6.94691C0.182309 7.01978 0.275527 7.05618 0.388837 7.05618H15.5555V9.77837C15.5555 9.94063 15.6329 10.058 15.7866 10.1307C15.9407 10.1958 16.0824 10.1712 16.2121 10.058L20.8786 5.75563C20.9596 5.67467 21 5.57762 21 5.4641C21 5.35905 20.9594 5.266 20.8783 5.185Z" fill={slideItem !== selectImages2D.length ? "#008FBC" : "#C4C4C4"} />
            </svg>
          </div>
        </div>
      </Modal>
    </div>
  )
}