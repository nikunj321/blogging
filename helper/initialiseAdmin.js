const { keystone } = require("..");
const { getItems, createItem } = require('@keystonejs/server-side-graphql-client');
const getUsersCount = async (keystone) => {
    /**
     *  @description
     * check for User 
     */

    try {
        const users = await getItems({
            keystone,
            listKey: "User",
            returnFields: `id email`
        });

        return users.length;
    } catch (e) {
        const errorMessage = `error fetching User from the list`;
        console.log(errorMessage, e);
    }
}

const createNewUser = async (keystone, { email, password, isAdmin, username } = {}) => {
    try {
        const user = await createItem({
            keystone,
            listKey: "User",
            item: { email, password, isAdmin, username },
            returnFields: 'id email password'
        });

    } catch (e) {
        const errorMessage = `CreateNEwUSer: Error creating user with email: ${email}`;
        console.log(errorMessage, e);
    }

    return { email, password };
}


const initializeAdmin = async (keystone) => {
    /**
     * @description
     *  check when initializing Keystone initialised 
     *  if User exist then don't create User else create Admin User
     */
    const count = await getUsersCount(keystone);

    if (count === 0) {
        // means no user in database
        // create Admin User
        try {
            const { email, password } = await createNewUser(keystone, {
                email: process.env.ADMIN_EMIAL || 'admin@admin',
                username: "admin",
                password: "generate strong passord",
                isAdmin: true
            });

            console.log(`
               Admin User created:
                    email: ${email}
                    password: ${password}
                kindly changed the Email and Password , after first initialised! 
            `);
        } catch (e) {
            const errorMessage = `error creating admin User`;
            console.log(errorMessage);
        }
    }
};

module.exports = { initializeAdmin };