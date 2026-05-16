export const authOptions = {
    providers: [
        {
            id: 'linkedin',
            name: 'LinkedIn',
            type: 'oauth',
            wellKnown: 'https://www.linkedin.com/oauth/.well-known/openid-configuration',
            authorization: {
                params: { scope: 'openid profile email' },
            },
            client: { token_endpoint_auth_method: 'client_secret_post' },
            clientId: process.env.LINKEDIN_CLIENT_ID,
            clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
            profile(profile) {
                return {
                    id: profile.sub,
                    name: profile.name,
                    email: profile.email ?? null,
                    image: profile.picture ?? null,
                    linkedinId: profile.sub,
                };
            },
        },
    ],
    callbacks: {
        async jwt({ token, profile, account }) {
            if (account?.provider === 'linkedin' && profile) {
                token.linkedinId = profile.sub;
                token.picture = profile.picture ?? null;
            }
            return token;
        },
        async session({ session, token }) {
            session.user.linkedinId = token.linkedinId ?? null;
            session.user.image = token.picture ?? null;
            return session;
        },
    },
    pages: {
        signIn: '/builder',
        error: '/builder',
    },
    secret: process.env.NEXTAUTH_SECRET,
};
