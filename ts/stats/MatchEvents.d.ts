interface MatchEvents {
  /** An ordered list of events that describe a match from start to completion. Events can
      be a variety of types which will influence what fields are filled in. */
  GameEvents: GameEvent[];
  
  /** As this is an experimental API it has no guarantees around its accuracy. However we
      do try our best to ensure all events are valid and accounted for. If they do not
      match up to our expectations this field will return as false indicating this may not
      be the full set of events that occurred in game. */ 
  IsCompleteSetOfEvents: boolean;

  // internal use only. A set of related resource links.
  //Links: null
}

interface Player {
    /** The player's gamertag. */
    Gamertag: string;

    // internal use only. This will always be null.
    //Xuid: null
}

interface WorldLocation {
    /** The x co-ordinate */
    x: number;
    /** The y co-ordinate */
    y: number;
    /** The z co-ordinate */
    z: number;
}

interface GameEvent {
    /** The gamertags of players who contributed to a kill. */
    Assistants: Player[],

    /** The disposition of the death. Can be one of the following:
       Friendly = 0,
       Hostile = 1,
       Neutral = 2  */
    DeathDisposition: number;

    /** Describes if the death was committed by the killer from behind (Assassination or
        melee to back). */
    IsAssassination: boolean;

    /** Describes if the kill was committed by the killer with a ground pound. */
    IsGroundPound: boolean;

    /** Describes if the kill was committed by the killer with a head shot. */
    IsHeadshot: boolean;

    /** Describes if the kill was committed by the killer using melee. */
    IsMelee: boolean;

    /** Describes if the kill was committed by the killer with a shoulder bash. */
    IsShoulderBash: boolean;

    /** Describes if the kill was committed by the killer with a weapon. */
    IsWeapon: boolean;

    /** Describes the killer's information. Can be null if killer is not a player in the game. */
    Killer: Player;

    /** The type of killer that caused the death. Can be one of the following:
        None = 0,
        Player = 1,
        AI = 2 */ 
    KillerAgent: number;

    /** Any attachments the killer's weapon had. */
    KillerWeaponAttachmentIds: number[];

    /** The ID of the weapon. Weapons are available via the Metadata API. */
    KillerWeaponStockId: number;

    /** Object describing the position of the killer on the map when they made the kill. */
    KillerWorldLocation: WorldLocation;

    /** Describes the victim's information. Can be null if victim is not a player in the game */ 
    Victim: Player;

    /** The type of victim who was killed. Can be one of the following:
        None = 0,
        Player = 1,
        AI = 2 */
    VictimAgent: number;

    /** Any attachments the victim's weapon had. */
    VictimAttachmentIds: number[];

    /** The ID of the weapon. Weapons are available via the Metadata API. */
    VictimStockId: number;

    /** Object describing the position of the victim on the map when they were killed. */
    VictimWorldLocation: WorldLocation;

    /** Descriptor to determine what fields will be filled in for the event. This list
        will grow over time as more events are exposed. Can be one of the following:
        Death - An event that is created when a death occurs in the match. */
    EventName: string;

    /** Time passed since the start of the match when the event occurred. This is
        expressed as an ISO 8601 Duration. */
    TimeSinceStart: string;
}
