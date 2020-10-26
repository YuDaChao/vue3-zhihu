import { ColumnProps } from '@/components/column/src/props'
import { PostProps } from '@/components/post/src/props'
import { UserProps } from '@/components/global-header/src/props'

export interface GlobalDataProp {
  columns: ColumnProps[]
  posts: PostProps[]
  user: UserProps
}
