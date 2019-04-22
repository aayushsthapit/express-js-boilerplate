import bookshelf from '../../db';


class RefreshToken extends bookshelf.Model{
    get tableName(){
        return 'refresh_tokens'
    }

    get hasTimestamps(){
        return true;
    }
}

export default RefreshToken;