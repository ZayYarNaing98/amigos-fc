// Static club content. Edit these values to update the page.
import groupNight from './assets/group-photo.jpg'
import groupDay from './assets/group-photo1.jpg'

export const club = {
  name: 'Amigos FC',
  shortName: 'Amigos',
  motto: 'Together we play, together we win.',
  founded: 2033,
  stadium: 'Amigos Community Ground',
  city: 'Yangon',
  email: 'zayarnaing.pp@gmail.com',
  phone: '+95 9 000 000 000',
}

export const stats = [
  { label: 'Founded', value: club.founded },
  { label: 'Trophies', value: 7 },
  { label: 'Players', value: 24 },
  { label: 'Fans', value: '5K+' },
]

export const players = [
  { number: 1, name: 'Nay Myo Zaw', position: 'Goalkeeper' },
  { number: 2, name: 'ကိုကာကျက်', position: 'Defender' },
  { number: 4, name: 'Ko Linn', position: 'Defender' },
  { number: 5, name: 'ရေနွေးဦး', position: 'Defender' },
  { number: 3, name: 'အကောက်စိန်', position: 'Defender' },
  { number: 6, name: 'Zaybimendi', position: 'Midfielder' },
  { number: 8, name: 'Kaung Martt', position: 'Midfielder' },
  { number: 10, name: 'Egyar', position: 'Midfielder', captain: true },
  { number: 7, name: 'SuanPi', position: 'Forward' },
  { number: 9, name: 'Michel', position: 'Forward' },
  { number: 11, name: 'Pyae Sone', position: 'Forward' },
]

export const fixtures = [
  { date: '2026-10-04', time: '16:00', opponent: 'Golden Lions', home: true, competition: 'League' },
  { date: '2026-10-11', time: '15:30', opponent: 'River United', home: false, competition: 'League' },
  { date: '2026-10-18', time: '17:00', opponent: 'City Rangers', home: true, competition: 'Cup' },
  { date: '2026-10-25', time: '16:00', opponent: 'Eastside FC', home: false, competition: 'League' },
]

export const results = [
  { date: '2026-09-27', opponent: 'Blue Eagles', home: true, us: 3, them: 1 },
  { date: '2026-09-20', opponent: 'Harbour Town', home: false, us: 2, them: 2 },
  { date: '2026-09-13', opponent: 'Northern Stars', home: true, us: 1, them: 0 },
  { date: '2026-09-06', opponent: 'Valley Athletic', home: false, us: 0, them: 1 },
]

export const news = [
  {
    date: '2026-09-27',
    title: 'Amigos beat Blue Eagles 3–1 at home',
    body: 'A brace from Nay Myo Zaw and a late strike from Egyar sealed an impressive win in front of a packed crowd.',
  },
  {
    date: '2026-09-22',
    title: 'Youth academy trials open',
    body: 'Players aged 10–17 are invited to join our open trials every Saturday in October. Bring boots and water!',
  },
  {
    date: '2026-09-15',
    title: 'New home kit revealed',
    body: 'Blue, red and yellow — our new kit carries the colours of the Amigos crest. Available at the club shop from next week.',
  },
]

export const heroImage = groupNight

export const gallery = [
  { src: groupNight, caption: 'Amigos squad after a night match under the lights' },
  { src: groupDay, caption: 'Friendly match day with the Amigos family' },
]
