import axios from 'axios'

const User = async () => {
	const res = await axios.get('https://randomuser.me/api')
	const user = res.data.results[0]

	console.log(user)

	const template = `User`

	return template
}

export default User
