import { Tweet } from 'types'
import { LocalStorageManager } from './local-storage-manager'
import { z } from 'zod'

export const NameLocalStorageManager = new LocalStorageManager<string>(
  'name',
  z.string().min(1)
)

export const TweetsLocalStorageManager = new LocalStorageManager<Tweet[]>(
  'tweets',
  z.array(
    z.object({
      id: z.string().uuid(),
      author: z.string().min(1),
      content: z.string().min(1),
      postedOn: z.date(),
    })
  )
)
