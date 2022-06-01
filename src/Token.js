// I have code, now just need to figure out how to use that code to get access token.
// AQB5wpP7hWeHNo9Idy5-tco94YrLlhfJDN4NHKe3UXWrhiRlCAyrWMGMTLtCQO3oPn28-7TwITNr5OE4XDQ98qecIFIJAsTsS2bH2XSCK5ViWnkZnY3SAm40UOp93ppNxWZisPWr_50ZM0eF1Upnx35Oiz512C8u3w
//BQCcMk656sOzihs1GgCX_-DSUw0e0k6wUR4WaB2-R2vrD4SWy1nEaloQbZrRd9cZBTAh28k2jQucx0k-OQZDAfjgjtKavDfYW-kxKbvI6TLMqPV9VeZOqyytU1sWBHMjD1L_WPuTieZmNHCvLw","token_type":"Bearer","expires_in":3600,"refresh_token":"AQCwTHFfpzKxfMlNFg4BmEQXBYrxAWfdO-TgnQPcy_X52VVTj0nlBIzntpoiLYYRkvZol89D_Hzme41ofcIoYNoL7AYqylSzffWBoa84EXLojffZqWNQ8fdhosdTe-XJGbE"}
import React from 'react';

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=629579831c91499992e38c561ae394bf&response_type=code&redirect_uri=http://localhost:3000"

const Token = () => {
  return (
    <div>
        <a href={AUTH_URL}>Login With Spotify</a>
    </div>
  )
}

export default Token