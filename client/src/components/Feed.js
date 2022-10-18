import React from 'react'

export default function Feed({user, setUser}) {

//if user, want to see highest rated prompt answers and can click on the
// individual prompt answers, 



// fetchinf the prompts controller and prompt answers here 


return (
  <div>
    {user ? (
      <>

        <div className="feed-container">
          {menus.map(menu => (
            <FeedCard menu={menu} key={menu.id} />
          ))}

          <div className="prev-next-container">

            {count === 0 ? null : (
              <button className="prev-next-button" onClick={handleDecrementCount}>
                <BsArrowLeft size="18" style={{marginBottom: "-5px"}} /> Prev
              </button>
            )}

            {menus.length < 20 ? null : (
              <>
                <div className="button-space"></div>
              
                <button className="prev-next-button" onClick={handleIncrementCount}>
                  Next <BsArrowRight size="18" style={{marginBottom: "-5px"}} />
                </button>	
              </>
            )}			
          
          </div>
          
        </div>

      </>
    ) : null}
  </div>
);
}
