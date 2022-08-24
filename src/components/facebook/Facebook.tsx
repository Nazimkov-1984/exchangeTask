import React, { Component, useCallback, useState } from "react"
import FacebookLogin from "react-facebook-login"

const FaceBook = () => {
  const [token, setToken] = useState(null)
  const responseFacebook = useCallback((response: any) => {
    setToken(response.accessToken)
    console.log(response)
  }, [])
  return (
    <div>
      <FacebookLogin
        appId="1140048720260050"
        autoLoad={true}
        fields="name, email, picture"
        callback={responseFacebook}
      />
      <div style={{ fontSize: "10px" }}>{`acces token: ${token}`}</div>
    </div>
  )
}

export default FaceBook
