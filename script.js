const projects = {

  spellforge: {
    pre: 'project_01 // mechanics system',
    left: `
      <div class="p-type mech">Mechanics System</div>
      <div class="p-title">Spellforge</div>
      <div class="p-subtitle">Unreal Engine 5 · spell combination prototype</div>

      <div class="p-meta">
        <div class="p-meta-row">
          <span class="pm-label">Engine</span>
          <span class="pm-val">Unreal Engine 5</span>
        </div>
        <div class="p-meta-row">
          <span class="pm-label">Genre</span>
          <span class="pm-val">Action RPG</span>
        </div>
        <div class="p-meta-row">
          <span class="pm-label">Focus</span>
          <span class="pm-val">Spell Combination System</span>
        </div>
        <div class="p-meta-row">
          <span class="pm-label">Status</span>
          <div class="p-status"><span class="sd sd-orange"></span>In Development</div>
        </div>
      </div>

      <div class="p-tags">
        <span class="p-tag">Unreal Engine 5</span>
        <span class="p-tag">Blueprints</span>
        <span class="p-tag">Data Tables</span>
        <span class="p-tag">Combination System</span>
        <span class="p-tag">Spell System</span>
        <span class="p-tag">Drag & Drop UI</span>
      </div>
    `,
    right: `
      <div class="p-section">
        <div class="p-sec-label">overview</div>
        <div class="p-text">SpellForge is a prototype built around one core mechanic: combining magical stones in a set of slots to produce a spell. The actual subject of the project is that combination system — matching whatever set of stones the player places against a library of known spell recipes.<br><br>Everything else was secondary, built only to support and demonstrate the core mechanic: a set of elemental stone items to combine, a simple inventory to store them, and a drag-and-drop flow for moving stones from the inventory into the combination slots.</div>
      </div>

      <div class="p-section">
        <div class="p-sec-label">how it works</div>
        <div class="p-steps">
          <div class="p-step">
            <div class="ps-num">01</div>
            <div class="ps-text"><strong>Inventory (right panel)</strong> — a grid-based inventory where elemental stones are stored after pickup. Each stone represents a specific element — fire, ice, lightning, and others.</div>
          </div>
          <div class="p-step">
            <div class="ps-num">02</div>
            <div class="ps-text"><strong>Combination Slots (center)</strong> — three slots where the player drags stones from the inventory. The result is determined by the <em>set</em> of stones placed, not their order — "Fire, Water, Lightning" always produces the same spell regardless of arrangement. Once all slots are filled, the result spell appears automatically.</div>
          </div>
          <div class="p-step">
            <div class="ps-num">03</div>
            <div class="ps-text"><strong>Active Spell Slots (left panel)</strong> — five slots where crafted spells can be assigned for use during gameplay. The full loop: explore → collect → combine → assign → cast.</div>
          </div>
        </div>
      </div>

      <div class="p-section">
        <div class="p-sec-label">screenshot</div>
        <div style="border:1px solid var(--border);overflow:hidden;">
          <img src="images/spellforge/screenshot_spellforge.png" alt="SpellForge prototype — Unreal Engine 5" style="width:100%;display:block;opacity:.9;cursor:zoom-in;" onclick="openLightbox(this)" />
          <div style="padding:10px 14px;border-top:1px solid var(--border);font-family:var(--mono);font-size:9px;color:var(--muted);letter-spacing:.1em;">
            Overview of the prototype test scene · active spell slots (left), combination slots (center), inventory grid (right)
          </div>
        </div>
      </div>

      <div class="p-section">
        <div class="p-sec-label">system architecture</div>
        <div class="p-text" style="margin-bottom:16px">The system was built so that new elemental stones — and new combinations that produce spells — can be created and edited with minimal effort, without touching any code. Everything runs on two Unreal Engine Data Tables:</div>
        <div class="p-feature orange">
          <div class="pf-title">Stone Definitions — DT_Items</div>
          <div class="pf-desc">Every elemental stone in the game — ID, name, type, and properties — lives in a single row of this table. Creating or editing a stone means adding or changing one row, nothing else.</div>
        </div>
        <div class="p-feature orange">
          <div class="pf-title">Combination Recipes — DT_Spells + FindSpell</div>
          <div class="pf-desc">Each spell is defined as a Required Elements array in DT_Spells. When stones are placed, FindSpell builds a Current Elements array from the slots and compares it against every registered recipe, sorting both arrays first so the order stones were placed in doesn't matter. A match returns the spell instantly.</div>
        </div>
      </div>

      <div class="p-section">
        <div class="p-sec-label">current state</div>
        <div class="p-text" style="margin-bottom:14px;">The following systems are functional:</div>
        <div class="p-steps">
          <div class="p-step"><div class="ps-num">▸</div><div class="ps-text"><strong>Player movement</strong> — basic third-person character controller</div></div>
          <div class="p-step"><div class="ps-num">▸</div><div class="ps-text"><strong>Item pickup</strong> — elemental stones can be picked up from the environment and stored in the inventory</div></div>
          <div class="p-step"><div class="ps-num">▸</div><div class="ps-text"><strong>Spell crafting</strong> — stones can be dragged from the inventory into the combination slots, triggering the FindSpell function and producing a result spell</div></div>
          <div class="p-step"><div class="ps-num">▸</div><div class="ps-text"><strong>Active spell slots</strong> — crafted spells can be assigned to one of five active slots and selected during gameplay</div></div>
        </div>
        <div class="p-text" style="margin-top:14px;">All systems are running in a placeholder test environment — no final art, models, or level design are present at this stage. The focus of the prototype is entirely on validating the core spell-crafting mechanic.</div>
      </div>

      <div class="p-section">
        <div class="p-sec-label">media</div>
        <div class="carousel" data-idx="0">
          <div class="carousel-viewport">
            <div class="carousel-track">
              <div class="carousel-slide"><img src="images/spellforge/media-1.jpg" alt="SpellForge — screenshot 1" onclick="openLightbox(this)" /></div>
              <div class="carousel-slide"><img src="images/spellforge/media-2.jpg" alt="SpellForge — screenshot 2" onclick="openLightbox(this)" /></div>
              <div class="carousel-slide"><img src="images/spellforge/media-3.png" alt="SpellForge — screenshot 3" onclick="openLightbox(this)" /></div>
            </div>
          </div>
          <button class="carousel-btn prev" type="button" onclick="carouselNav(this,-1)" aria-label="Previous">‹</button>
          <button class="carousel-btn next" type="button" onclick="carouselNav(this,1)" aria-label="Next">›</button>
          <div class="carousel-dots">
            <button class="carousel-dot on" type="button" onclick="carouselGo(this,0)" aria-label="Go to slide 1"></button>
            <button class="carousel-dot" type="button" onclick="carouselGo(this,1)" aria-label="Go to slide 2"></button>
            <button class="carousel-dot" type="button" onclick="carouselGo(this,2)" aria-label="Go to slide 3"></button>
          </div>
        </div>
        <div style="font-family:var(--mono);font-size:9px;color:var(--muted);letter-spacing:.1em;margin-bottom:18px;">
          Prototype screenshots
        </div>
        <div style="border:1px solid var(--border);overflow:hidden;">
          <div style="position:relative;padding-bottom:56.25%;height:0;">
            <iframe src="https://www.youtube.com/embed/p-wCGO7fTz8" title="SpellForge — prototype demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe>
          </div>
          <div style="padding:10px 14px;border-top:1px solid var(--border);font-family:var(--mono);font-size:9px;color:var(--muted);letter-spacing:.1em;">
            Prototype demo
          </div>
        </div>
      </div>

      <div class="p-section">
        <div class="p-sec-label">challenges & solutions</div>
        <div class="p-challenge">
          <div class="pc-problem">Problem</div>
          <div class="pc-title">Incorrect Spell Matching</div>
          <div class="pc-desc">FindSpell was returning wrong results — combinations matched spells they shouldn't have.</div>
          <div class="pc-solution"><span>→ Fix:</span> The comparison logic was running before the Current Elements array was fully populated, and sorting wasn't applied consistently. Fixed by deferring the comparison until all slots are filled and enforcing sort on both arrays.</div>
        </div>
      </div>

      <div class="p-section">
        <div class="p-sec-label">what's next</div>
        <div class="p-text" style="margin-bottom:14px;">Beyond these, SpellForge's combination system could serve as a foundation for a larger planned project — <a onclick="openPanel('covenant')" style="color:var(--accent);cursor:pointer;text-decoration:underline;">Covenant Of Three</a>.</div>
        <div class="p-next-list">
          <div class="p-next-item"><div class="pni-bullet">▸</div><div class="pni-text"><strong>Expanded spell database</strong> — more elemental types, broader spell variety, detailed spell properties (damage, range, effects)</div></div>
          <div class="p-next-item"><div class="pni-bullet">▸</div><div class="pni-text"><strong>Character stats system</strong> — base characteristics that interact with equipped spells and items</div></div>
          <div class="p-next-item"><div class="pni-bullet">▸</div><div class="pni-text"><strong>New item types</strong> — weapons (swords), books with passive stat bonuses, extending the inventory beyond elemental stones</div></div>
        </div>
      </div>
    `
  },

  nemesis: {
    pre: 'project_05 // mechanics system',
    left: `
      <div class="p-type mech">Mechanics System</div>
      <div class="p-title">Nemesis</div>
      <div class="p-subtitle">Unreal Engine 5 · data-driven inventory &amp; storage system</div>

      <div class="p-meta">
        <div class="p-meta-row">
          <span class="pm-label">Engine</span>
          <span class="pm-val">Unreal Engine 5</span>
        </div>
        <div class="p-meta-row">
          <span class="pm-label">Genre</span>
          <span class="pm-val">Survival Horror</span>
        </div>
        <div class="p-meta-row">
          <span class="pm-label">Focus</span>
          <span class="pm-val">Inventory &amp; Item System</span>
        </div>
        <div class="p-meta-row">
          <span class="pm-label">Inspired by</span>
          <span class="pm-val">Resident Evil 3 (1999)</span>
        </div>
        <div class="p-meta-row">
          <span class="pm-label">Status</span>
          <div class="p-status"><span class="sd sd-orange"></span>In Development</div>
        </div>
      </div>

      <div class="p-tags">
        <span class="p-tag">Unreal Engine 5</span>
        <span class="p-tag">Blueprints</span>
        <span class="p-tag">Data Tables</span>
        <span class="p-tag">Survival</span>
        <span class="p-tag">Zombie</span>
        <span class="p-tag">Resident Evil</span>
      </div>
    `,
    right: `
      <div class="p-section">
        <div class="p-sec-label">overview</div>
        <div class="p-text">Nemesis is a systems project built around one goal: constructing a complete, reliable inventory system — along with the item system behind it, covering item types and how each one is used. Resident Evil 3 (1999) was used as the reference — its slot-based inventory and item box storage were rebuilt from scratch in Unreal Engine 5.<br><br>The focus was on getting every part of the loop right: items displaying correctly in the UI, being added on pickup, removed on use or transfer, and persisting properly through save and load. The item box acts as external storage — items can be moved between the player's inventory and the box in both directions, with state staying consistent on either side.</div>
      </div>

      <div class="p-section">
        <div class="p-sec-label">how it works</div>
        <div class="p-text" style="margin-bottom:16px;">The inventory system is built around one idea: every item — weapon, ammo, healing item, key — is added to the inventory and classified by type the moment it's picked up. From then on, the inventory itself knows what the item is, what it does, and how to handle it.</div>
        <div class="p-steps">
          <div class="p-step">
            <div class="ps-num">01</div>
            <div class="ps-text"><strong>Pickup &amp; Classification</strong> — when an item is picked up, it's added to the inventory and sorted into its type class (weapon, ammo, healing, key, file, and so on).</div>
          </div>
          <div class="p-step">
            <div class="ps-num">02</div>
            <div class="ps-text"><strong>Type-Aware Behavior</strong> — because every item carries its type, the inventory knows automatically what to do with it when used — equip a weapon, consume a heal, open a file — without special-case logic per item.</div>
          </div>
          <div class="p-step">
            <div class="ps-num">03</div>
            <div class="ps-text"><strong>Item Information Display</strong> — the inventory also surfaces everything relevant about an item: its description, which weapon is currently equipped, how much ammo remains, or the full text of a collected file.</div>
          </div>
        </div>
      </div>

      <div class="p-section">
        <div class="p-sec-label">screenshot</div>
        <div style="border:1px solid var(--border);overflow:hidden;">
          <img src="images/nemesis/screenshot_nemesis.png" alt="Nemesis — overview" style="width:100%;display:block;opacity:.9;cursor:zoom-in;" onclick="openLightbox(this)" />
          <div style="padding:10px 14px;border-top:1px solid var(--border);font-family:var(--mono);font-size:9px;color:var(--muted);letter-spacing:.1em;">
            Overview of the Nemesis inventory system
          </div>
        </div>
      </div>

      <div class="p-section">
        <div class="p-sec-label">system architecture</div>
        <div class="p-text" style="margin-bottom:16px;">The standout technical achievement is a fully data-driven item and inventory system — the most complete one built across all projects so far. The key principle: adding a new item never requires touching Blueprint logic.</div>
        <div class="p-feature orange">
          <div class="pf-title">Master Item Database — DT_Items</div>
          <div class="pf-desc">Every item in the game is registered here with its basic info: icon, name, and type. Adding a new item means adding one row.</div>
        </div>
        <div class="p-feature orange">
          <div class="pf-title">Type-Specific Data — DT_Weapons, DT_Recovery, DT_Files, and other per-type tables</div>
          <div class="pf-desc">Each item type has its own table defining type-specific parameters: damage and required ammo type for weapons, the amount of HP restored for recovery items, and so on.</div>
        </div>
        <div class="p-feature orange">
          <div class="pf-title">Usage Logic — BP_Items</div>
          <div class="pf-desc">When the player presses use on an item, its name and type are passed to BP_Items, a single Blueprint that holds all the logic for how each type is used — equip a weapon, consume a heal, open a file.</div>
        </div>
      </div>

      <div class="p-section">
        <div class="p-sec-label">current state</div>
        <div class="p-text" style="margin-bottom:14px;">The following systems are fully implemented and functional:</div>
        <div class="p-steps">
          <div class="p-step"><div class="ps-num">▸</div><div class="ps-text"><strong>Inventory system</strong> — item pickup, slot management, and full inventory UI</div></div>
          <div class="p-step"><div class="ps-num">▸</div><div class="ps-text"><strong>Fixed camera system</strong> — a level-placed observer switches between pre-set camera angles as the player moves through zones, matching the reference — Resident Evil 3</div></div>
          <div class="p-step"><div class="ps-num">▸</div><div class="ps-text"><strong>Two playable levels</strong> — two levels the player can move between, where items can be picked up and their use tested</div></div>
          <div class="p-step"><div class="ps-num">▸</div><div class="ps-text"><strong>Item box storage</strong> — external storage with two-way transfer between inventory and box</div></div>
          <div class="p-step"><div class="ps-num">▸</div><div class="ps-text"><strong>Save / load</strong> — inventory and storage state persists correctly across sessions</div></div>
          <div class="p-step"><div class="ps-num">▸</div><div class="ps-text"><strong>Main menu</strong> — New Game, Load Game, Options, Exit — fully implemented</div></div>
        </div>
      </div>

      <div class="p-section">
        <div class="p-sec-label">media</div>
        <div class="carousel" data-idx="0">
          <div class="carousel-viewport">
            <div class="carousel-track">
              <div class="carousel-slide"><img src="images/nemesis/media-1.png" alt="Nemesis — screenshot 1" onclick="openLightbox(this)" /></div>
              <div class="carousel-slide"><img src="images/nemesis/media-2.png" alt="Nemesis — screenshot 2" onclick="openLightbox(this)" /></div>
              <div class="carousel-slide"><img src="images/nemesis/media-3.png" alt="Nemesis — screenshot 3" onclick="openLightbox(this)" /></div>
              <div class="carousel-slide"><img src="images/nemesis/media-4.png" alt="Nemesis — screenshot 4" onclick="openLightbox(this)" /></div>
              <div class="carousel-slide"><img src="images/nemesis/media-5.png" alt="Nemesis — screenshot 5" onclick="openLightbox(this)" /></div>
              <div class="carousel-slide"><img src="images/nemesis/media-6.png" alt="Nemesis — screenshot 6" onclick="openLightbox(this)" /></div>
              <div class="carousel-slide"><img src="images/nemesis/media-7.png" alt="Nemesis — screenshot 7" onclick="openLightbox(this)" /></div>
            </div>
          </div>
          <button class="carousel-btn prev" type="button" onclick="carouselNav(this,-1)" aria-label="Previous">‹</button>
          <button class="carousel-btn next" type="button" onclick="carouselNav(this,1)" aria-label="Next">›</button>
          <div class="carousel-dots">
            <button class="carousel-dot on" type="button" onclick="carouselGo(this,0)" aria-label="Go to slide 1"></button>
            <button class="carousel-dot" type="button" onclick="carouselGo(this,1)" aria-label="Go to slide 2"></button>
            <button class="carousel-dot" type="button" onclick="carouselGo(this,2)" aria-label="Go to slide 3"></button>
            <button class="carousel-dot" type="button" onclick="carouselGo(this,3)" aria-label="Go to slide 4"></button>
            <button class="carousel-dot" type="button" onclick="carouselGo(this,4)" aria-label="Go to slide 5"></button>
            <button class="carousel-dot" type="button" onclick="carouselGo(this,5)" aria-label="Go to slide 6"></button>
            <button class="carousel-dot" type="button" onclick="carouselGo(this,6)" aria-label="Go to slide 7"></button>
          </div>
        </div>
        <div style="font-family:var(--mono);font-size:9px;color:var(--muted);letter-spacing:.1em;">
          Screenshots · inventory, item box, and fixed camera system
        </div>
      </div>

      <div class="p-section">
        <div class="p-sec-label">challenges & solutions</div>
        <div class="p-challenge">
          <div class="pc-problem">Problem</div>
          <div class="pc-title">Incorrect Interface Values</div>
          <div class="pc-desc">The inventory UI sometimes displayed values that didn't match the actual state on the code side.</div>
          <div class="pc-solution"><span>→ Fix:</span> Traced the issue to incorrect widget bindings, then rebuilt the affected UI elements to pull the correct values.</div>
        </div>
      </div>

      <div class="p-section">
        <div class="p-sec-label">what's next</div>
        <div class="p-text" style="margin-bottom:12px;">The inventory and storage system is in place and working — from here there's a clear path to expand it further:</div>
        <div class="p-next-list">
          <div class="p-next-item"><div class="pni-bullet">▸</div><div class="pni-text"><strong>More items</strong> — expanding the item database with additional weapons, healing items, and key items</div></div>
          <div class="p-next-item"><div class="pni-bullet">▸</div><div class="pni-text"><strong>Additional levels</strong> — expanding the playable environment beyond the current two</div></div>
          <div class="p-next-item"><div class="pni-bullet">▸</div><div class="pni-text"><strong>Improved enemy AI</strong> — more advanced patrol, detection, and combat behaviour</div></div>
        </div>
      </div>
    `
  },

  solidenemy: {
    pre: 'project_06 // mechanics system',
    left: `
      <div class="p-type mech">Mechanics System</div>
      <div class="p-title">Solid Enemy</div>
      <div class="p-subtitle">Unreal Engine 5 · stealth enemy AI</div>

      <div class="p-meta">
        <div class="p-meta-row">
          <span class="pm-label">Engine</span>
          <span class="pm-val">Unreal Engine 5</span>
        </div>
        <div class="p-meta-row">
          <span class="pm-label">Genre</span>
          <span class="pm-val">Stealth / Action</span>
        </div>
        <div class="p-meta-row">
          <span class="pm-label">Focus</span>
          <span class="pm-val">Enemy AI</span>
        </div>
        <div class="p-meta-row">
          <span class="pm-label">Inspired by</span>
          <span class="pm-val">Metal Gear Solid</span>
        </div>
        <div class="p-meta-row">
          <span class="pm-label">Status</span>
          <div class="p-status"><span class="sd sd-orange"></span>In Development</div>
        </div>
      </div>

      <div class="p-tags">
        <span class="p-tag">Enemy AI</span>
        <span class="p-tag">Inventory System</span>
        <span class="p-tag">Items</span>
        <span class="p-tag">Stealth</span>
        <span class="p-tag">Perception</span>
        <span class="p-tag">Unreal Engine 5</span>
      </div>
    `,
    right: `
      <div class="p-section">
        <div class="p-sec-label">overview</div>
        <div class="p-text">Solid Enemy is a systems project centered on stealth enemy AI, inspired by Metal Gear Solid. Alongside the AI, it implements an inventory system and interactive items the player uses to read and manipulate the game world.<br><br>The target is a complete guard AI loop: enemies that patrol a set territory along fixed routes, react to environmental sounds — footsteps, gunfire, disturbances — investigate and search when something seems wrong, raise the alarm on visual contact, respond to alarms raised by other guards, and open fire once the player is in sight.<br><br>Reference — Metal Gear Solid (1998): guards walk fixed patrol routes with a visible vision cone, and the alert system runs through distinct states. <strong>Alert</strong> — a guard spots the player, radios HQ, and reinforcements pour in. <strong>Evasion</strong> — line of sight is lost and guards actively sweep the area on a countdown. <strong>Caution</strong> — a lingering period of heightened alertness after the search ends. Guards also pick up on indirect cues: sounds, gunfire, wet or snowy footprints, open lockers, and bodies left in view.</div>
      </div>
    `
  },


  slasherknight: {
    pre: 'project_02 // mechanics system',
    left: `
      <div class="p-type mech">Mechanics System</div>
      <div class="p-title">SlashKnight</div>
      <div class="p-subtitle">Unreal Engine 5 · action combat prototype</div>
      <div class="p-meta">
        <div class="p-meta-row"><span class="pm-label">Engine</span><span class="pm-val">Unreal Engine 5</span></div>
        <div class="p-meta-row"><span class="pm-label">Genre</span><span class="pm-val">Action / Slasher</span></div>
        <div class="p-meta-row"><span class="pm-label">Focus</span><span class="pm-val">Combo Pattern Recognition</span></div>
        <div class="p-meta-row"><span class="pm-label">Status</span><div class="p-status"><span class="sd sd-green"></span>Complete</div></div>
      </div>
      <div class="p-tags" style="margin-top:18px;">
        <span class="p-tag">UE5</span>
        <span class="p-tag">Combo System</span>
        <span class="p-tag">Pattern Recognition</span>
        <span class="p-tag">Data-Driven</span>
        <span class="p-tag">Action Game</span>
      </div>
    `,
    right: `
      <div class="p-section">
        <div class="p-sec-label">overview</div>
        <div class="p-text">SlashKnight is an action game built in Unreal Engine 5, inspired by the combat system common to slashers — alternating light and heavy attacks that chain into different combinations of strikes. Instead of pressing a single button, the player builds a rhythm of light and heavy inputs, and the sequence itself decides which attack comes out.<br><br>On top of the combo system, the project also implements a health and mana system, special moves that spend mana to perform stronger attacks, and a merchant system where the player can buy potions that restore mana or health. The project is considered complete as a learning work: all core mechanics are implemented and available in a test level.</div>
      </div>

      <div class="p-section">
        <div class="p-sec-label">how it works</div>
        <div class="p-text" style="margin-bottom:16px;">Combos are built from a sequence of light (L) and heavy (H) inputs — for example, LLHL. Every individual attack in that sequence can carry its own parameters (animation, damage amount, damage multiplier, and more), defined by its position in the sequence and its type.</div>
        <div class="p-steps">
          <div class="p-step">
            <div class="ps-num">01</div>
            <div class="ps-text"><strong>Input Chain</strong> — each attack button press (light or heavy) adds one entry to the current input chain.</div>
          </div>
          <div class="p-step">
            <div class="ps-num">02</div>
            <div class="ps-text"><strong>Type &amp; Position Lookup</strong> — on every press, the game reads the attack's type, searches the registered combos for a pattern matching the chain so far, and pulls that hit's parameters — its own animation, damage, and multiplier, specific to its position in the sequence.</div>
          </div>
          <div class="p-step">
            <div class="ps-num">03</div>
            <div class="ps-text"><strong>Chain Continuation</strong> — after playing the hit, the game waits for the next attack input. If the player attacks again in time, it looks for the next element in the sequence and repeats the lookup.</div>
          </div>
          <div class="p-step">
            <div class="ps-num">04</div>
            <div class="ps-text"><strong>Timeout Reset</strong> — if no input arrives within a set window, the chain resets to zero and the next attack starts a new sequence from scratch.</div>
          </div>
        </div>
        <div class="p-text" style="margin-top:16px;">The third light attack in L → L → L, for example, plays a completely different animation than the third light in L → H → L — even though the final input is identical.</div>
      </div>

      <div class="p-section">
        <div class="p-sec-label">screenshot</div>
        <div style="border:1px solid var(--border);overflow:hidden;">
          <img src="images/slashknight/screenshot_slashknight.png" alt="SlashKnight — overview" style="width:100%;display:block;opacity:.9;cursor:zoom-in;" onclick="openLightbox(this)" />
          <div style="padding:10px 14px;border-top:1px solid var(--border);font-family:var(--mono);font-size:9px;color:var(--muted);letter-spacing:.1em;">
            Overview of the SlashKnight test level
          </div>
        </div>
      </div>

      <div class="p-section">
        <div class="p-sec-label">system architecture</div>
        <div class="p-text" style="margin-bottom:16px;">The system was built so that new combos can be added without touching any code. All combo data — the input sequence and every hit's parameters — lives in a single Unreal Engine Data Table:</div>
        <div class="p-feature orange">
          <div class="pf-title">Combo Definitions — DT_ComboDB</div>
          <div class="pf-desc">Each row defines one full combo: its input sequence (e.g. LLHL) and the parameters for every hit in it — animation, damage, damage multiplier, and more. Adding a new combo means adding a new row here.</div>
        </div>
        <div class="p-feature orange">
          <div class="pf-title">No Length Restrictions</div>
          <div class="pf-desc">A pattern can consist of any number of hits in any L/H alternation and will still be correctly recognized and played back. The system handles chains of arbitrary length without modification.</div>
        </div>
      </div>

      <div class="p-section">
        <div class="p-sec-label">current state</div>
        <div class="p-text" style="margin-bottom:14px;">The following systems are fully implemented and functional:</div>
        <div class="p-steps">
          <div class="p-step"><div class="ps-num">▸</div><div class="ps-text"><strong>Combat system</strong> — L/H pattern recognition with corresponding animation playback</div></div>
          <div class="p-step"><div class="ps-num">▸</div><div class="ps-text"><strong>Enemies</strong> — take damage and react to attacks; drop coins on defeat</div></div>
          <div class="p-step"><div class="ps-num">▸</div><div class="ps-text"><strong>Character death mechanic</strong></div></div>
          <div class="p-step"><div class="ps-num">▸</div><div class="ps-text"><strong>Trading system</strong> — a merchant NPC that sells items; purchases gated by the player's current coin count</div></div>
          <div class="p-step"><div class="ps-num">▸</div><div class="ps-text"><strong>Safe Zone</strong> — a designated area around the merchant where the player sheathes their weapon and becomes non-aggressive; exiting triggers an automatic save</div></div>
          <div class="p-step"><div class="ps-num">▸</div><div class="ps-text"><strong>Main menu and save/load system</strong></div></div>
          <div class="p-step"><div class="ps-num">▸</div><div class="ps-text"><strong>Test level</strong> — a sandbox environment where all mechanics can be explored</div></div>
        </div>
      </div>

      <div class="p-section">
        <div class="p-sec-label">media</div>
        <div class="carousel" data-idx="0">
          <div class="carousel-viewport">
            <div class="carousel-track">
              <div class="carousel-slide"><img src="images/slashknight/media-1.png" alt="SlashKnight — screenshot 1" onclick="openLightbox(this)" /></div>
              <div class="carousel-slide"><img src="images/slashknight/media-2.png" alt="SlashKnight — screenshot 2" onclick="openLightbox(this)" /></div>
              <div class="carousel-slide"><img src="images/slashknight/media-3.png" alt="SlashKnight — screenshot 3" onclick="openLightbox(this)" /></div>
              <div class="carousel-slide"><img src="images/slashknight/media-4.png" alt="SlashKnight — screenshot 4" onclick="openLightbox(this)" /></div>
              <div class="carousel-slide"><img src="images/slashknight/media-5.png" alt="SlashKnight — screenshot 5" onclick="openLightbox(this)" /></div>
            </div>
          </div>
          <button class="carousel-btn prev" type="button" onclick="carouselNav(this,-1)" aria-label="Previous">‹</button>
          <button class="carousel-btn next" type="button" onclick="carouselNav(this,1)" aria-label="Next">›</button>
          <div class="carousel-dots">
            <button class="carousel-dot on" type="button" onclick="carouselGo(this,0)" aria-label="Go to slide 1"></button>
            <button class="carousel-dot" type="button" onclick="carouselGo(this,1)" aria-label="Go to slide 2"></button>
            <button class="carousel-dot" type="button" onclick="carouselGo(this,2)" aria-label="Go to slide 3"></button>
            <button class="carousel-dot" type="button" onclick="carouselGo(this,3)" aria-label="Go to slide 4"></button>
            <button class="carousel-dot" type="button" onclick="carouselGo(this,4)" aria-label="Go to slide 5"></button>
          </div>
        </div>
        <div style="font-family:var(--mono);font-size:9px;color:var(--muted);letter-spacing:.1em;margin-bottom:18px;">
          Screenshots · complete build
        </div>
        <div style="border:1px solid var(--border);overflow:hidden;">
          <div style="position:relative;padding-bottom:56.25%;height:0;">
            <iframe src="https://www.youtube.com/embed/UiFyUmJVRhM" title="SlashKnight — prototype demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe>
          </div>
          <div style="padding:10px 14px;border-top:1px solid var(--border);font-family:var(--mono);font-size:9px;color:var(--muted);letter-spacing:.1em;">
            SlashKnight prototype demo · complete build · all mechanics implemented
          </div>
        </div>
      </div>

      <div class="p-section">
        <div class="p-sec-label">challenges & solutions</div>
        <div class="p-challenge">
          <div class="pc-problem">Problem</div>
          <div class="pc-title">Wrong Animation Lookup</div>
          <div class="pc-desc">The combo system initially pulled incorrect animations during pattern matching. The logic wasn't correctly identifying which registered pattern the current input sequence corresponded to.</div>
          <div class="pc-solution"><span>→ Fix:</span> A rework of the chain recognition algorithm resolved the matching logic entirely.</div>
        </div>
      </div>

      <div class="p-section">
        <div class="p-sec-label">what's next</div>
        <div class="p-text" style="margin-bottom:12px;">The project is considered finished as a learning work, but the direction for potential future development is clear:</div>
        <div class="p-next-list">
          <div class="p-next-item"><div class="pni-bullet">▸</div><div class="pni-text"><strong>More animations</strong> — additional unique strikes and finishers for each pattern</div></div>
          <div class="p-next-item"><div class="pni-bullet">▸</div><div class="pni-text"><strong>Damage system polish</strong> — more precise hitboxes, better visual and audio feedback</div></div>
          <div class="p-next-item"><div class="pni-bullet">▸</div><div class="pni-text"><strong>Advanced enemy AI</strong> — blocks, dodges, and counterattacks</div></div>
          <div class="p-next-item"><div class="pni-bullet">▸</div><div class="pni-text"><strong>Progression system</strong> — character development and combo unlocks</div></div>
          <div class="p-next-item"><div class="pni-bullet">▸</div><div class="pni-text"><strong>Expanded combo parameters</strong> — additional per-hit properties in DT_ComboDB, such as a damage multiplier, beyond the current animation/damage set</div></div>
        </div>
      </div>
    `
  },

  bloodveil: {
    pre: 'project_03 // game design document',
    left: `
      <div class="p-type gdd">GDD</div>
      <div class="p-title">Project:<br>Bloodveil</div>
      <div class="p-subtitle">survival horror · game design document</div>
      <div class="p-meta">
        <div class="p-meta-row"><span class="pm-label">Genre</span><span class="pm-val">Survival Horror</span></div>
        <div class="p-meta-row"><span class="pm-label">Platform</span><span class="pm-val">PC (primary)</span></div>
        <div class="p-meta-row"><span class="pm-label">Engine</span><span class="pm-val">Unreal Engine 5</span></div>
        <div class="p-meta-row"><span class="pm-label">Setting</span><span class="pm-val">Romania · Gothic Hotel</span></div>
        <div class="p-meta-row"><span class="pm-label">Inspired by</span><span class="pm-val">RE · Dead Space · Silent Hill</span></div>
        <div class="p-meta-row"><span class="pm-label">Status</span><div class="p-status"><span class="sd sd-green"></span>Complete</div></div>
      </div>
      <a href="files/Project-Bloodveil.pdf" download style="display:flex;align-items:center;gap:9px;margin-top:22px;padding:11px 16px;border:1px solid rgba(0,191,255,.25);background:rgba(0,191,255,.04);text-decoration:none;transition:background .2s;">
        <span style="font-family:var(--mono);font-size:16px;color:var(--accent);">↓</span>
        <div>
          <div style="font-family:var(--mono);font-size:9px;color:var(--accent);letter-spacing:.15em;text-transform:uppercase;">Download GDD</div>
          <div style="font-family:var(--mono);font-size:9px;color:var(--muted);margin-top:2px;">Project-Bloodveil.pdf · 24 pages</div>
        </div>
      </a>
      <div class="p-tags" style="margin-top:18px;"><span class="p-tag">Survival Horror</span><span class="p-tag">Vampires</span><span class="p-tag">Narrative</span><span class="p-tag">Worldbuilding</span><span class="p-tag">GDD</span></div>
    `,
    right: `
      <div class="p-section">
        <div class="p-sec-label">overview</div>
        <div class="p-text">The story of Project: Bloodveil unfolds in the mountainous regions of Romania. The player assumes the role of a private detective who, due to an unexpected train cancellation, is forced to remain in the country. He encounters a mysterious woman who invites him to her father's hotel deep in the mountains — where he soon discovers the staff are vampires, luring travelers for the annual celebration of Count Dracula's birthday.<br><br>The game is designed to immerse the player in psychological tension, mystery, and unease. The horror is not built on jump scares, but on atmospheric dread — the constant feeling that something is deeply wrong. Every corridor, whisper, and flicker of light builds danger, even in moments of silence.</div>
      </div>

      <div class="p-section">
        <div class="p-sec-label">key points</div>
        <div class="p-feature gold">
          <div class="pf-title">Genre & Platform</div>
          <div class="pf-desc">Survival Horror with close-quarters and ranged combat. Primary target: PC. Future ports to PlayStation, Xbox, and Nintendo planned. Controls support both mouse/keyboard and gamepad.</div>
        </div>
        <div class="p-feature gold">
          <div class="pf-title">Visual Style</div>
          <div class="pf-desc">Realistic detail combined with subtle dark fantasy distortion. Muted palette of deep blues, grays, and aged gold. A crimson night filter symbolises vampiric influence — ever-present but never overpowering, blurring the line between beauty and horror.</div>
        </div>
        <div class="p-feature gold">
          <div class="pf-title">Gameplay Style</div>
          <div class="pf-desc">Inspired by Resident Evil, Dead Space, Silent Hill, and Alan Wake. Focused on exploration, puzzle-solving, and intense encounters that blend psychological tension with strategic combat. Target audience: players aged 16–30 interested in narrative-driven horror.</div>
        </div>
      </div>

      <div class="p-section">
        <div class="p-sec-label">gameplay systems</div>

        <div style="font-family:var(--mono);font-size:9px;color:var(--accent);letter-spacing:.18em;text-transform:uppercase;margin:0 0 8px;">Exploration</div>
        <div class="p-text" style="margin-bottom:16px;">Semi-open level design focused on the hotel and surroundings. Each area offers multiple paths and layers of discovery. Certain sections are locked behind puzzles or hidden entrances. Narrative is delivered through environmental storytelling, written notes, and NPC interactions — optional conversations reward attentive players with lore and gameplay advantages.</div>

        <div style="font-family:var(--mono);font-size:9px;color:var(--accent);letter-spacing:.18em;text-transform:uppercase;margin:0 0 8px;">Combat</div>
        <div class="p-text" style="margin-bottom:8px;">Combines close-quarters and ranged encounters requiring rational decisions based on available resources. Unlike slow-moving zombies, vampires are agile and reactive. Enemy weaknesses — sunlight, silver, garlic — can be used strategically.</div>
        <div class="p-steps" style="margin-bottom:16px;">
          <div class="p-step"><div class="ps-num">▸</div><div class="ps-text"><strong>Firearms</strong> — powerful but rare, loud, and limited by scarce ammunition.</div></div>
          <div class="p-step"><div class="ps-num">▸</div><div class="ps-text"><strong>Bows</strong> — quieter, lower damage; arrows can be retrieved from defeated enemies.</div></div>
          <div class="p-step"><div class="ps-num">▸</div><div class="ps-text"><strong>Melee</strong> — knives and spears enable close combinations but degrade over time.</div></div>
        </div>

        <div style="font-family:var(--mono);font-size:9px;color:var(--accent);letter-spacing:.18em;text-transform:uppercase;margin:0 0 8px;">Stealth</div>
        <div class="p-text" style="margin-bottom:8px;">Built around vampire hierarchy and sensory behaviour. Three distinct classes:</div>
        <div class="p-steps" style="margin-bottom:16px;">
          <div class="p-step"><div class="ps-num">▸</div><div class="ps-text"><strong>High Vampires</strong> — react sharply to noise and light. A single mistake triggers a near-unavoidable confrontation.</div></div>
          <div class="p-step"><div class="ps-num">▸</div><div class="ps-text"><strong>Lesser Vampires</strong> — dulled senses; can be distracted, but pursuit is risky.</div></div>
          <div class="p-step"><div class="ps-num">▸</div><div class="ps-text"><strong>Newly Turned</strong> — slow and disoriented; can often be avoided in plain sight.</div></div>
        </div>

        <div style="font-family:var(--mono);font-size:9px;color:var(--accent);letter-spacing:.18em;text-transform:uppercase;margin:0 0 8px;">Puzzles</div>
        <div class="p-text" style="margin-bottom:16px;">Both mandatory and optional. Mandatory puzzles unlock story progression; optional ones reward with hidden items and shortcuts. Difficulty ranges from simple coded locks to multi-step mechanical sequences. Some areas function as full puzzle levels — entire spaces the player must read and solve.</div>

        <div style="font-family:var(--mono);font-size:9px;color:var(--accent);letter-spacing:.18em;text-transform:uppercase;margin:0 0 8px;">Resource Management</div>
        <div class="p-text" style="margin-bottom:16px;">Slot-based inventory where each item occupies a different amount of space — a key takes 1 slot, a pistol 4. Forces constant decisions about what to carry. Safe zones allow depositing unused items and saving progress. Resources divide into key items, weapons, and consumables. Certain items can be purchased from NPCs in exchange for gold or specific objects.</div>

        <div style="font-family:var(--mono);font-size:9px;color:var(--accent);letter-spacing:.18em;text-transform:uppercase;margin:0 0 8px;">Progression & Night Cycle</div>
        <div class="p-text">Progression is tied to story advancement and exploration rather than experience points. The game follows a real-time night cycle: each session begins around 10:00 PM, with the goal of surviving until sunrise at 6:00 AM. As the night deepens, environments grow darker, sounds distort, and enemies become more aggressive. By midnight, even safe zones can be temporarily breached. The game features a single ending reached through multiple paths — player choices, rescues, and interactions all influence how events unfold.</div>
      </div>

      <div class="p-section">
        <div class="p-sec-label">world structure</div>
        <div class="p-text" style="margin-bottom:16px;">An old yet majestic castle hotel in mountainous Romania, architecturally inspired by Peleș Castle in Sinaia. The hotel spans multiple floors and diverse zones.</div>
        <div class="p-steps" style="margin-bottom:16px;">
          <div class="p-step"><div class="ps-num">▸</div><div class="ps-text"><strong>Residential areas</strong> — guest rooms and corridors.</div></div>
          <div class="p-step"><div class="ps-num">▸</div><div class="ps-text"><strong>Public sections</strong> — grand hall, library, ballroom, concert hall.</div></div>
          <div class="p-step"><div class="ps-num">▸</div><div class="ps-text"><strong>Service areas</strong> — basements, tunnels, maintenance corridors.</div></div>
          <div class="p-step"><div class="ps-num">▸</div><div class="ps-text"><strong>Surrounding grounds</strong> — gardens, forest, graveyard, chapel.</div></div>
        </div>
        <div class="p-text" style="margin-bottom:16px;">Zone types: Safe Zones for rest and inventory management; Enemy-Dense Zones requiring stealth; Boss Arenas with unique environmental layouts; Puzzle Arenas as self-contained challenges; Exploration Arenas focused on lore and hidden items.<br><br>As the night progresses the environment changes — lighting dims, some doors become blocked, and enemies grow more aggressive. By morning, light filters in but the hotel's structure has shifted, collapsing rooms and opening new paths.</div>
        <div class="p-text">Navigation is guided by lighting and sound design rather than constant UI assistance. A map displays only explored areas, ensuring navigation always retains uncertainty. Warm light suggests safety; cold or flickering light signals danger or secrets. Sound — footsteps, distant voices, ambient hums — provides information about threats before they're visible.</div>
      </div>

      <div class="p-section">
        <div class="p-sec-label">characters</div>
        <div class="p-feature gold">
          <div class="pf-title">Victor — Private Detective / Protagonist</div>
          <div class="pf-desc">Intelligent, observant, and methodical. Trapped in Romania after his train is cancelled. His logical mind struggles to reconcile the impossible reality around him — his increasing acceptance of the irrational mirrors the player's own descent into horror.</div>
        </div>
        <div class="p-feature gold">
          <div class="pf-title">Emilia — Daughter of Count Dracula / Half-Vampire</div>
          <div class="pf-desc">Born from a mortal mother and a vampiric father, she exists between two worlds. Her motives are conflicted — genuine compassion, subconscious manipulation, and instinct all compete. Depending on player choices, she becomes a guide, emotional connection, or tragic opponent.</div>
        </div>
        <div class="p-feature gold">
          <div class="pf-title">Vlad — Count Dracula / Main Antagonist</div>
          <div class="pf-desc">Rarely seen directly, yet his presence saturates every corridor. Turned to darkness after losing Emilia's mortal mother — his hatred of humankind stems from personal tragedy. Throughout the game he communicates through visions and intrusive thoughts, revealed fully only in the final confrontation.</div>
        </div>
        <div class="p-feature gold">
          <div class="pf-title">Ioan — Vampire Hunter / Merchant</div>
          <div class="pf-desc">Arrived searching for his missing brother. Stoic and distant, hiding deep grief beneath calm. Treats Victor as an outsider at first, slowly evolving into a reluctant ally. Acts as the game's merchant, trading rare items and anti-vampiric tools.</div>
        </div>
      </div>

      <div class="p-section">
        <div class="p-sec-label">enemies</div>
        <div class="p-text" style="margin-bottom:16px;">Primary enemies are vampires across three tiers: <strong style="color:var(--white)">Turned</strong> (mindless, instinct-driven, zombie-like), <strong style="color:var(--white)">Lesser Vampires</strong> (deformed, aggressive, moving on all fours), and <strong style="color:var(--white)">Higher Vampires</strong> (ancient, sentient, with unique supernatural abilities — these serve as bosses). Additional enemies include werewolves in the outer areas and skeletal servants in the catacombs.</div>
      </div>

      <div class="p-section">
        <div class="p-sec-label">bosses</div>
        <div class="p-challenge">
          <div class="pc-problem">Grand Corridor</div>
          <div class="pc-title">The Butler — The Endless Hallway</div>
          <div class="pc-desc">A looping corridor that seems infinite. Progression comes from observing environmental anomalies that break the illusion. Each failed attempt resets the hallway — the Butler cannot be defeated directly.</div>
        </div>
        <div class="p-challenge">
          <div class="pc-problem">Grand Ballroom</div>
          <div class="pc-title">The Musicians — Symphony of Dead</div>
          <div class="pc-desc">Rhythmic combat where sound pulses across the hall. Dodge to the beat and destroy each musician's instrument. Tempo accelerates with each destroyed instrument.</div>
          <div class="pc-solution"><span>Alt:</span> Find and burn the cursed musical sheet beforehand to skip the encounter entirely.</div>
        </div>
        <div class="p-challenge">
          <div class="pc-problem">The Kitchen</div>
          <div class="pc-title">The Chef — A Deadly Recipe</div>
          <div class="pc-desc">Non-combat boss. Cook a dish impressive enough to satisfy the vampire chef under time pressure. Reward: access to a special store with unique healing and crafting items.</div>
          <div class="pc-solution"><span>Alt:</span> Discover the secret recipe in the Library for guaranteed success.</div>
        </div>
        <div class="p-challenge">
          <div class="pc-problem">Multi-level Library</div>
          <div class="pc-title">The Library — Tower of Knowledge</div>
          <div class="pc-desc">Traversal-based challenge. Reach the top by manipulating levers, rotating bridges, and dodging collapsing floors. A shifting architecture puzzle.</div>
        </div>
        <div class="p-challenge">
          <div class="pc-problem">Basement Arena</div>
          <div class="pc-title">The Brute — Fist of the Damned</div>
          <div class="pc-desc">Traditional melee boss — a towering vampire brute. Dodge heavy attacks and target weak points on its back. The breakable environment allows using pillars and traps to stun.</div>
        </div>
        <div class="p-challenge">
          <div class="pc-problem">Card Game</div>
          <div class="pc-title">Ioan — The Hunter's Wager</div>
          <div class="pc-desc">A psychological mini-game: defeat Ioan in a strategic card game to unlock an expanded trade inventory. Players can cheat using distraction mechanics — but risk permanent hostility if caught.</div>
        </div>
        <div class="p-challenge">
          <div class="pc-problem">Dance Sequence</div>
          <div class="pc-title">Emilia — Dance of Temptation</div>
          <div class="pc-desc">A rhythmic, cinematic duel presented as a dance. Match her movements perfectly to survive. Timing-based challenge blending music, movement, and dialogue.</div>
          <div class="pc-solution"><span>Alt:</span> Bring Emilia a bouquet of flowers before the event to skip the fight and earn her trust.</div>
        </div>
        <div class="p-challenge">
          <div class="pc-problem">Throne Hall / Rooftop</div>
          <div class="pc-title">Vlad — The Final Bloodveil</div>
          <div class="pc-desc">The final boss. Fast-paced, demanding precision, timing, and adaptability. Alternates between close and ranged combat phases.</div>
          <div class="pc-solution"><span>Alt:</span> Acquiring the Silver Bullet through a side quest shortens the final phase.</div>
        </div>
      </div>
    `
  },

  covenant: {
    pre: 'project_04 // mechanics design document',
    left: `
      <div class="p-type gdd">MDD</div>
      <div class="p-title">Project:<br>Covenant Of Three</div>
      <div class="p-subtitle">tactical turn-based RPG · mechanics design document</div>
      <div class="p-meta">
        <div class="p-meta-row"><span class="pm-label">Genre</span><span class="pm-val">Tactical Turn-Based RPG</span></div>
        <div class="p-meta-row"><span class="pm-label">Platform</span><span class="pm-val">PC (primary)</span></div>
        <div class="p-meta-row"><span class="pm-label">Engine</span><span class="pm-val">Unreal Engine 5</span></div>
        <div class="p-meta-row"><span class="pm-label">Squad</span><span class="pm-val">Mage · Warrior · Scholar</span></div>
        <div class="p-meta-row"><span class="pm-label">Inspired by</span><span class="pm-val">Baldurs Gate · Clair Obscur: Expedition 33</span></div>
        <div class="p-meta-row"><span class="pm-label">Status</span><div class="p-status"><span class="sd sd-amber"></span>Writing</div></div>
      </div>
      <a href="files/Project-Covenant_Of_Three.pdf" download style="display:flex;align-items:center;gap:9px;margin-top:22px;padding:11px 16px;border:1px solid rgba(0,191,255,.25);background:rgba(0,191,255,.04);text-decoration:none;transition:background .2s;">
        <span style="font-family:var(--mono);font-size:16px;color:var(--accent);">↓</span>
        <div>
          <div style="font-family:var(--mono);font-size:9px;color:var(--accent);letter-spacing:.15em;text-transform:uppercase;">Download MDD</div>
          <div style="font-family:var(--mono);font-size:9px;color:var(--muted);margin-top:2px;">Project-Covenant_Of_Three.pdf · 20 pages</div>
        </div>
      </a>
      <div class="p-tags" style="margin-top:18px;"><span class="p-tag">Tactical RPG</span><span class="p-tag">Combat Design</span><span class="p-tag">Systems Design</span></div>
    `,
    right: `
      <div class="p-section">
        <div class="p-sec-label">overview</div>
        <div class="p-text">A tactical turn-based RPG where every battle is designed to feel like a game of chess. The player commands a squad of three specialists — a Mage, a Warrior, and a Scholar — each defined by a distinct combat role, resource profile, and unique in-battle mechanics. Victory is not achieved through raw power, but through understanding positioning, managing resources, and leveraging synergy between all three characters.</div>
      </div>

      <div class="p-section">
        <div class="p-sec-label">design pillars</div>
        <div class="p-feature gold">
          <div class="pf-title">Positioning</div>
          <div class="pf-desc">Each character has an optimal range and role. Proper placement is the foundation of every successful encounter — the Mage at long distance, the Warrior adjacent to enemies, the Scholar adapting to the field.</div>
        </div>
        <div class="p-feature gold">
          <div class="pf-title">AP Economy</div>
          <div class="pf-desc">Action Points persist between turns up to a cap. Saving AP to execute high-impact actions is often more effective than spending inefficiently — strategic banking creates natural rhythm and meaningful decisions.</div>
        </div>
        <div class="p-feature gold">
          <div class="pf-title">Arena Awareness</div>
          <div class="pf-desc">Battlefields directly influence gameplay. Arena size, layout, obstacles, and environmental hazards determine which abilities are viable and safe to use. Large arenas feel like opportunities; small arenas feel like threats.</div>
        </div>
        <div class="p-feature gold">
          <div class="pf-title">Synergy & Adaptability</div>
          <div class="pf-desc">The Scholar identifies weaknesses, the Mage exploits them, the Warrior applies pressure. Synergies are opt-in rewards — a player who ignores them can still complete encounters, but mastery comes from executing multi-character combos.</div>
        </div>
      </div>

      <div class="p-section">
        <div class="p-sec-label">the mage</div>
        <div class="p-text" style="margin-bottom:14px">Primary damage dealer and battlefield controller. Her AoE spells do not discriminate between friend and foe — positioning before casting is non-negotiable. Optimal range: 8–15+ cells. Highest base AP in squad.</div>
        <div class="p-feature gold">
          <div class="pf-title">Amulet System</div>
          <div class="pf-desc">The Mage's defining mechanic — 3 slots, each holding one elemental stone. The combination determines the spell cast: single stone (basic attack), pair (combined element), or all three (compound spell). Stones: Fire · Ice · Lightning · Wind.</div>
        </div>
        <div class="p-text" style="margin-top:12px">Example combos: Fire+Ice = Steam Cloud (50% hit-chance penalty) · Lightning+Water = Electro Flood · Wind+Wind+Wind = Cyclone · Ice+Wind = Hail Storm (AoE + knockback).</div>
      </div>

      <div class="p-section">
        <div class="p-sec-label">the warrior</div>
        <div class="p-text" style="margin-bottom:14px">Melee frontliner and damage dealer. Operates exclusively at close range (1–3 cells). Mid base AP, high per-action impact. Role is defined by equipment, not a fixed stance.</div>
        <div class="p-feature gold">
          <div class="pf-title">Weapon Configuration System</div>
          <div class="pf-desc">Two weapon slots allow flexible loadout: One-Handed + Shield for balanced damage and survivability, or Two-Handed weapon for maximum damage output at the cost of defense. The player defines the Warrior's role dynamically.</div>
        </div>
        <div class="p-text" style="margin-top:12px">Attacks unlocked via skill tree: Spin Slash (360° AoE) · Charge Strike (3-cell line) · Overhead Smash (Two-Handed only) · Shield Bash with stun (One-Handed only) · Pinpoint Strike (ignores cover).</div>
      </div>

      <div class="p-section">
        <div class="p-sec-label">the scholar</div>
        <div class="p-text" style="margin-bottom:14px">The most mechanically complex character. Fights with a pistol (inverse range scaling — highest damage point-blank) or delegates power to a network of deployed constructs while managing repairs and upgrades.</div>
        <div class="p-feature gold">
          <div class="pf-title">Direct Control Mode</div>
          <div class="pf-desc">The Scholar acts independently with his own AP. Constructs operate autonomously on predefined AI behavior — turrets target nearest enemy, melee constructs engage nearby threats.</div>
        </div>
        <div class="p-feature gold">
          <div class="pf-title">Construct Command Mode</div>
          <div class="pf-desc">The Scholar sacrifices personal actions for full battlefield control — issuing direct movement and ability commands to all constructs simultaneously, enabling coordinated high-precision tactical plays.</div>
        </div>
        <div class="p-text" style="margin-top:12px">Constructs: Barrier Shield · Auto-Turret · Rocket Launcher · Bridge/Platform · Trap Module · Scanner Array (reveals enemy weaknesses).</div>
      </div>

      <div class="p-section">
        <div class="p-sec-label">action points system</div>
        <div class="p-text" style="margin-bottom:14px">AP is the universal combat currency. Unused AP carries over to the next turn up to a cap. Characters begin with different base AP reflecting their roles. Key costs:</div>
        <div class="p-steps">
          <div class="p-step"><div class="ps-num">1</div><div class="ps-text"><strong>Move 1 cell</strong> — 1 AP (difficult tiles: 2–3)</div></div>
          <div class="p-step"><div class="ps-num">2</div><div class="ps-text"><strong>Basic attack (melee/ranged)</strong> — 2 AP</div></div>
          <div class="p-step"><div class="ps-num">3</div><div class="ps-text"><strong>Light spell (1 stone)</strong> — 2–3 AP · Combo spell (2–3 stones) — 4–6 AP</div></div>
          <div class="p-step"><div class="ps-num">4</div><div class="ps-text"><strong>Construct deployment</strong> — 3–4 AP · Repair/upgrade — 2–4 AP</div></div>
          <div class="p-step"><div class="ps-num">5</div><div class="ps-text"><strong>Revive fallen ally</strong> — 5 AP (restores partial HP)</div></div>
        </div>
      </div>

      <div class="p-section">
        <div class="p-sec-label">skill trees</div>
        <div class="p-text" style="margin-bottom:14px">Shared XP pool — one Skill Point per level, assigned freely across all three trees. Heavy investment creates a specialist; spreading points creates a balanced squad. Neither approach is universally optimal.</div>
        <div class="p-challenge">
          <div class="pc-problem">Mage Branches</div>
          <div class="pc-title">Arcane Slots · Elemental Mastery · Mana Efficiency · Supportive Magic · Overcharge</div>
          <div class="pc-desc">Overcharge lets the Mage spend extra AP to amplify a spell — larger radius, doubled damage, or extended duration.</div>
        </div>
        <div class="p-challenge">
          <div class="pc-problem">Warrior Branches</div>
          <div class="pc-title">Combat Techniques · Physical Conditioning · Heavy Armour · Weapon Specialisation · Battle Fury</div>
          <div class="pc-desc">Battle Fury: each consecutive hit on the same turn stacks a damage percentage bonus.</div>
        </div>
        <div class="p-challenge">
          <div class="pc-problem">Scholar Branches</div>
          <div class="pc-title">Construct Slots · Engineering Mastery · Weapons Research · Precision Targeting · Scanner Network</div>
          <div class="pc-desc">Inter-class nodes at the outer edges of each tree reward investment across multiple characters with squad-level synergy bonuses.</div>
        </div>
      </div>
    `
  },

  cot: {
    pre: 'future_project_01 // Mechanics System',
    left: `
      <div class="proj-type mech">Mechanics System</div>
      <div class="p-title">Covenant Of Three</div>
      <div class="p-subtitle">tactical turn-based RPG · three-role squad</div>
      <div class="p-meta">
        <div class="p-meta-row"><span class="pm-label">Engine</span><span class="pm-val">Unreal Engine 5</span></div>
        <div class="p-meta-row"><span class="pm-label">Genre</span><span class="pm-val">Tactical Turn-Based RPG</span></div>
        <div class="p-meta-row"><span class="pm-label">Focus</span><span class="pm-val">Turn-Based Combat with Role-Specific Playstyles</span></div>
        <div class="p-meta-row"><span class="pm-label">Inspired by</span><span class="pm-val">Baldur's Gate · Clair Obscur: Expedition 33</span></div>
        <div class="p-meta-row"><span class="pm-label">Status</span><div class="p-status"><span class="sd sd-orange"></span>Planned</div></div>
      </div>
      <div class="p-tags"><span class="p-tag">Tactical RPG</span><span class="p-tag">Turn-Based Combat</span><span class="p-tag">Systems Design</span><span class="p-tag">Squad</span></div>
    `,
    right: `
      <div class="p-section">
        <div class="p-sec-label">overview</div>
        <div class="p-text">Covenant Of Three is a tactical turn-based RPG built directly from an existing design document — the MDD, <a onclick="openPanel('covenant')" style="color:var(--accent);cursor:pointer;text-decoration:underline;">Project: Covenant Of Three</a> — which defines its core systems, combat structure, and gameplay philosophy.<br><br>The player commands a three-member squad — a Mage, a Warrior, and a Scholar — each with a distinct combat role and its own mechanics and resources. Combat is turn-based, and every decision carries a direct mechanical consequence: success depends on understanding how the three roles interact, not on raw stats.</div>
      </div>
    `
  },

  whitewolf: {
    pre: 'future_project_02 // Mechanics System',
    left: `
      <div class="proj-type mech">Mechanics System</div>
      <div class="p-title">White Wolf</div>
      <div class="p-subtitle">action RPG · character progression</div>
      <div class="p-meta">
        <div class="p-meta-row"><span class="pm-label">Engine</span><span class="pm-val">Unreal Engine 5</span></div>
        <div class="p-meta-row"><span class="pm-label">Genre</span><span class="pm-val">Action RPG</span></div>
        <div class="p-meta-row"><span class="pm-label">Focus</span><span class="pm-val">Character Progression System</span></div>
        <div class="p-meta-row"><span class="pm-label">Inspired by</span><span class="pm-val">The Witcher</span></div>
        <div class="p-meta-row"><span class="pm-label">Status</span><div class="p-status"><span class="sd sd-orange"></span>Planned</div></div>
      </div>
      <div class="p-tags"><span class="p-tag">The Witcher</span><span class="p-tag">Action RPG</span><span class="p-tag">Progression</span><span class="p-tag">Skill Tree</span><span class="p-tag">Swordplay</span></div>
    `,
    right: `
      <div class="p-section">
        <div class="p-sec-label">overview</div>
        <div class="p-text">White Wolf is a planned project inspired by the original Witcher (2007), developed in Unreal Engine 5. The main priority is a character progression system built around equipment and growth: different armor pieces provide different defense values, different weapons deal different damage, and a skill tree drives character progression, following the structure of the original game.<br><br>As a supporting mechanic, the project would implement a swordplay system modeled on the original's three combat styles — Strong Style for slow, heavily armored opponents, Fast Style for quick enemies, and Group Style for fighting several enemies at once. <a onclick="openPanel('slasherknight')" style="color:var(--accent);cursor:pointer;text-decoration:underline;">SlashKnight</a>'s existing combo-pattern system is a natural base to build these style-specific attack combinations on.</div>
      </div>

      <div class="p-section">
        <div class="p-sec-label">screenshot</div>
        <div style="border:1px solid var(--border);overflow:hidden;">
          <img src="images/whitewolf/screenshot_whitewolf.webp" alt="White Wolf — concept" style="width:100%;display:block;opacity:.9;cursor:zoom-in;" onclick="openLightbox(this)" />
          <div style="padding:10px 14px;border-top:1px solid var(--border);font-family:var(--mono);font-size:9px;color:var(--muted);letter-spacing:.1em;">
            White WOLFS
          </div>
        </div>
      </div>
    `
  }
};

function openPanel(id) {
  const p = projects[id];
  if (!p) return;
  document.getElementById('panel-pre').textContent = p.pre;
  document.getElementById('panel-body').innerHTML =
    `<div class="panel-left">${p.left}</div><div class="panel-right">${p.right}</div>`;
  document.querySelector('.panel-scroll').scrollTop = 0;
  document.getElementById('overlay').classList.add('open');
  document.getElementById('panel').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closePanel() {
  document.getElementById('overlay').classList.remove('open');
  document.getElementById('panel').classList.remove('open');
  document.body.style.overflow = '';
}

// Image carousel (circular)
function _carouselSet(c, idx) {
  const slides = c.querySelectorAll('.carousel-slide');
  const count = slides.length;
  idx = ((idx % count) + count) % count;
  c.dataset.idx = idx;
  c.querySelector('.carousel-track').style.transform = `translateX(-${idx * 100}%)`;
  c.querySelectorAll('.carousel-dot').forEach((d, i) => d.classList.toggle('on', i === idx));
}
function carouselNav(btn, dir) {
  const c = btn.closest('.carousel');
  _carouselSet(c, (parseInt(c.dataset.idx, 10) || 0) + dir);
}
function carouselGo(dot, idx) {
  _carouselSet(dot.closest('.carousel'), idx);
}

// Lightbox — enlarge an image on click, with navigation
const _lb = { imgs: [], idx: 0, carousel: null };
function openLightbox(img) {
  const c = img.closest('.carousel');
  const slideImgs = c ? Array.from(c.querySelectorAll('.carousel-slide img')) : [img];
  _lb.imgs = slideImgs.map(i => ({ src: i.currentSrc || i.src, alt: i.alt || '' }));
  _lb.idx = Math.max(0, slideImgs.indexOf(img));
  _lb.carousel = c;
  _lbRender();
  document.querySelectorAll('.lightbox-nav').forEach(b => { b.style.display = _lb.imgs.length > 1 ? '' : 'none'; });
  document.getElementById('lightbox').classList.add('open');
}
function _lbRender() {
  const cur = _lb.imgs[_lb.idx];
  if (!cur) return;
  const el = document.getElementById('lightbox-img');
  el.src = cur.src;
  el.alt = cur.alt;
}
function lightboxNav(dir) {
  const n = _lb.imgs.length;
  if (!n) return;
  _lb.idx = ((_lb.idx + dir) % n + n) % n;
  _lbRender();
  if (_lb.carousel) _carouselSet(_lb.carousel, _lb.idx);
}
function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
}

document.addEventListener('keydown', e => {
  const lbOpen = document.getElementById('lightbox').classList.contains('open');
  if (e.key === 'Escape') { lbOpen ? closeLightbox() : closePanel(); return; }
  if (!lbOpen) return;
  if (e.key === 'ArrowLeft') lightboxNav(-1);
  else if (e.key === 'ArrowRight') lightboxNav(1);
});

// Swipe down to close panel on mobile
let _touchStartY = 0;
const _panel = document.getElementById('panel');
_panel.addEventListener('touchstart', e => { _touchStartY = e.touches[0].clientY; }, { passive: true });
_panel.addEventListener('touchend', e => {
  if (e.changedTouches[0].clientY - _touchStartY > 80) closePanel();
}, { passive: true });
