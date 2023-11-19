interface RootObject {
    success: boolean;
    group: Group;
}

interface Group {
    id: string;
    name: string;
    acronym: string;
    disambiguation: string;
    web: string;
    addedUser: string;
    addedDate: string;
    csdb: string | null;
    zxdemo: string | null;
    demozoo: string | null;
    prods: Prod[];
}

interface Prod {
    id: string;
    name: string;
    type: string;
    addedUser: AddedUser;
    addedDate: string;
    releaseDate: string | null;
    voteup: string;
    votepig: string;
    votedown: string;
    voteavg: string;
    download: string;
    party_compo: string | null;
    party_place: string;
    party_year: string;
    sceneorg: string | null;
    demozoo: string | null;
    csdb: string | null;
    zxdemo: string | null;
    invitation: string | null;
    invitationyear: string | null;
    boardID: string | null;
    rank: string | null;
    groups: Group[];
    types: string[];
    placings: Placing[];
    platforms: { [key: string]: Platform };
    awards: any[];
    party: Party | null;
    cdc: number;
    popularity: number;
    screenshot: string;
    party_compo_name?: string;
}

interface AddedUser {
    id: string;
    nickname: string;
    level: string;
    avatar: string;
    glops: string;
    registerDate: string;
    udlogin: string | null;
    ojuice: string | null;
    slengpung: string | null;
    csdb: string | null;
    zxdemo: string | null;
    demozoo: string | null;
    stats: any[];
}

interface Placing {
    party: Party;
    compo: string;
    ranking: string;
    year: string;
    compo_name: string;
}

interface Party {
    id: string;
    name: string;
    web: string | null;
    addedDate: string | null;
    addedUser: string | null;
}

interface Platform {
    name: string;
    icon: string;
    slug: string;
}
