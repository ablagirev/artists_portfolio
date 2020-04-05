import axios from 'axios'

const getFooter = () => {
  // return axios.get('/api/artists/')

  return Promise.resolve({
    data: {
      social: [
        { id: '007', type: 'post', link: '7296617@mail.ru' },
        { id: '008', type: 'facebook', link: '#' },
        { id: '009', type: 'instagram', link: 'https://www.instagram.com/bureau_mp/' }
      ],
      contacts: [
        { id: '010', type: 'phone', value: '+7 903 729 66 17' },
        { id: '011', type: 'post', value: '7296617@mail.ru' }
      ],
      attachment: {
        id: '012',
        link:
          'https://docs.google.com/presentation/d/17pwmsReJYJrNFCXSOf9NZ-FhmnhYxYlnAisSRRfqDGE/edit#slide=id.p6',
        value: 'Скачать шахматку'
      },
      additional: [
        { id: '013', text: 'Фото/визитки: Kinoface Production', phone: '+7 916 437 7222' },
        { id: '014', text: 'Творческие визитки : Худяков Андрей', phone: '+7 985 277 44 99' }
      ],
      designer: {
        id: '015',
        value: '© KoalaKate Designs',
        link: '#'
      }
    }
  })
}

export const footerApi = { getFooter }
