import * as schedule from 'node-schedule'
import { swapCourtFeature } from '../../web/src/view/playground/mutateCourt'

class backgournd_jobs {
  public featured_court() {
    schedule.scheduleJob('* * * * *', async function () {
      console.log('* * * * * IT IS CRON TIME NOW * * * * *')
      try {
        await swapCourtFeature(3)
      } catch (err) {
        console.log(err)
      }
    })
  }
}

export default new backgournd_jobs()
