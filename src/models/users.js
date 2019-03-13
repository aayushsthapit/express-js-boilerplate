import bookshelf from '../../db';


class User extends bookshelf.Model{
    get tableName(){
        return 'users'
    }

    get hasTimestamps(){
        return true;
    }
}

export default User;