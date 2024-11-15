import jwt
import requests
import os
from jwcrypto import jwk


def get_jwk():
    jwks_url = "http://host.docker.internal:8001" + "/auth/.well-known/jwks.json"# TODO fix this hack, see views.p
    response = requests.get(jwks_url)
    return response.json()

def verify_id_token(id_token):
    jwks = get_jwk()

    unverified_header = jwt.get_unverified_header(id_token)
    if 'kid' not in unverified_header:
        raise ValueError("kid not in header of id token")
    
    rsa_key = jwk.JWK(**jwks['keys'][0])

    pem_key = rsa_key.export_to_pem()
    
    try:
        payload = jwt.decode(id_token, pem_key, algorithms=['RS256'], audience=os.getenv("SP_CLIENT_ID"))
        return payload
    except jwt.ExpiredSignatureError:
        raise ValueError("Token has expired")
    except Exception as e:
        raise ValueError(f"Unable to parse token: {str(e)}")
