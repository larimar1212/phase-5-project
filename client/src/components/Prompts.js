import React from 'react'


export default function Prompts({user, setUser}) {
	const params = useParams();


	useEffect(() => {
		if (user) {
			fetch(`/prompt/${params.ticket_id}`)
			.then((res) => {
				if (res.ok) {
					res.json().then((ticket) => {
						setTicket(ticket);
						if (ticket.owner.id === activeUser.id) {
							setIsAuthorized(true);
							setIsOwner(true);
						} else if (ticket.borrower.id === activeUser.id) {
							setIsAuthorized(true);
						}
					});
				} else {
					res.json().then((data) => console.log(data));
				}
			})
		}
	}, [activeUser, params]);






  return (
    <div>Prompts</div>
  )
}
