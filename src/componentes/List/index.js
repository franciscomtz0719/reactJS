import UserCard from '../userCard/'
const List = props => {
    const { data } = props
   console.log(UserCard)
  return (
    <div className='row row-cols-1 row-cols-md-4 g-4'>
      {data.map((item, index) => (
        <UserCard cardData={item} />
      ))}
    </div>
  )
}

export default List