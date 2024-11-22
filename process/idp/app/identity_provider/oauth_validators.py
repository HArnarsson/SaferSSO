from oauth2_provider.oauth2_validators import OAuth2Validator

class CustomOAuth2Validator(OAuth2Validator):
    # TODO: here we can edit what we are validating on, i.e., the sub field can be changed to
    # email or pk depending on needs, currently set to pk
    def get_additional_claims(self, request):
        return {
            "name": " ".join([request.user.first_name, request.user.last_name]).strip(),
            "email": request.user.email,
        }