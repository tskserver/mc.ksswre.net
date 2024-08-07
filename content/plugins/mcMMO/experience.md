---
title: mcMMO/experience
permalink: /mcMMO/experience/
noToc: true
description: tskserver の mcMMO 設定を公開します。これを見れば何をすれば経験値がいくら貰えるかが全部わかります。
---

サーバの `mcMMO/experience.yml` なファイルを公開します。

```yaml
#
#  Experience configuration
#  Last updated on 1.5.06-SNAPSHOT-b145
#
#  Configure the experience formula and experience settings here.
#
#####

#
#  Settings for XP formula
###
Experience_Formula:
    # Valid values are: LINEAR and EXPONENTIAL
    # If an invalid value is entered, this will reset to the default setting, which is LINEAR
    # LINEAR:      base + (level * multiplier)
    # EXPONENTIAL: multiplier * level ^ exponent + base
    Curve: LINEAR

    # If invalid values are entered mcMMO will not start and print an error in the console
    Linear_Values:
        base: 1020
        multiplier: 20
    Exponential_Values:
        multiplier: 0.1
        exponent: 1.80
        base: 2000

    # Cumulative experience curves will use a players power level instead of their skill level,
    # players with high power levels will have to gain a lot more experience to reach the next level in every skill.
    Cumulative_Curve: false

    # Experience gained in every skill will get multiplied by this value. 1.0 by default, 2.0 means two times as much
    Multiplier:
        Global: 1.0
        PVP: 1.0

    # Experience gained from mobs not naturally spawned will get multiplied by this value. 0 by default.
    Mobspawners:
        Multiplier: 0
    Breeding:
        Multiplier: 1.0

    # Experience gained will get divided by these values. 1.0 by default, 2.0 means two times less XP gained.
    Modifier:
        Swords: 1.0
        Taming: 1.0
        Acrobatics: 1.0
        Excavation: 1.0
        Herbalism: 1.0
        Unarmed: 1.0
        Woodcutting: 1.0
        Mining: 1.0
        Archery: 1.0
        Axes: 1.0
        Repair: 1.0
        Fishing: 1.0
        Alchemy: 1.0

    # XP earned by players with the permission mcmmo.perks.xp.customboost.<skillname> will get multiplied
    # with 1.25 by default, resulting in a 25% XP boost
    Custom_XP_Perk:
        Boost: 1.25

#
# Settings for Diminished Returns
###
Diminished_Returns:
    Enabled: false

    # Limit the amount of experience a player can earn:
    # Threshold (amount of experience) per Time_Interval (in minutes)
    Threshold:
        Swords: 20000
        Taming: 20000
        Acrobatics: 20000
        Excavation: 20000
        Herbalism: 20000
        Unarmed: 20000
        Woodcutting: 20000
        Mining: 20000
        Archery: 20000
        Axes: 20000
        Repair: 20000
        Fishing: 20000
        Alchemy: 20000

    Time_Interval: 10

#
#  Settings for XP conversion with '/mcconvert experience'
###
Conversion:
    # Old experience will get divided by this modifier
    Exp_Modifier: 1

#
#  Settings for XP distribution
###
Experience:
    PVP:
        Rewards: true
    Acrobatics:
        Dodge: 120
        Roll: 80
        Fall: 120

        # FeatherFall_Multiplier: Multiply Acrobatics XP by this value when wearing boots with the Feather Fall enchant
        FeatherFall_Multiplier: 2.0
    Alchemy:
        # Alchemy potion stages are based on the number of ingredients added
        # Potion_Stage_1 represents a base potion
        # Potion_Stage_2 represents a base potion with one ingredient
        # Potion_Stage_3 represents a base potion with one ingredient and one amplifier
        # Potion_Stage_4 represents a base potion with one ingredient and two amplifiers
        # Potion_Stage_5 represents a base potion with one ingredient where the amplifiers are swapped
        Potion_Stage_1: 15
        Potion_Stage_2: 30
        Potion_Stage_3: 60
        Potion_Stage_4: 120
        Potion_Stage_5: 0
    Archery:
        Distance_Multiplier: 0.025
    Fishing:
        Raw_Fish: 800
        Raw_Salmon: 800
        Clownfish: 800
        Pufferfish: 800
        Shake: 50
    Excavation:
        Clay: 40
        Dirt: 40
        Coarse_Dirt: 40
        Podzol: 40
        Grass: 40
        Gravel: 40
        Mycel: 40
        Sand: 40
        Red_Sand: 40
        Snow: 20
        Snow_Block: 40
        Soul_Sand: 40
    Woodcutting:
        Acacia: 90
        Birch: 90
        Dark_Oak: 90
        Generic: 70
        Jungle: 100
        Redwood: 80
        Huge_Mushroom_Red: 70
        Huge_Mushroom_Brown: 70
    Herbalism:
        Allium: 300
        Azure_Bluet: 150
        Beetroot_Block: 50
        Blue_Orchid: 150
        Brown_Mushroom: 150
        Cactus: 30
        Carrot: 50
        Chorus_Flower: 25
        Chorus_Plant: 1
        Cocoa: 30
        Crops: 50
        Dead_Bush: 30
        Lilac: 50
        Melon_Block: 20
        Nether_Warts: 50
        Orange_Tulip: 150
        Oxeye_Daisy: 150
        Peony: 50
        Pink_Tulip: 150
        Poppy: 100
        Potato: 50
        Pumpkin: 20
        Red_Mushroom: 150
        Red_Tulip: 150
        Rose_Bush: 50
        Small_Fern: 10
        Small_Grass: 10
        Sugar_Cane_Block: 30
        Sunflower: 50
        Tall_Grass: 50
        Tall_Fern: 50
        Vine: 10
        Water_Lily: 100
        White_Tulip: 150
        Yellow_Flower: 100
    Mining:
        Coal_Ore: 100
        Diamond_Ore: 750
        Emerald_Ore: 1000
        End_Bricks: 200
        Ender_Stone: 150
        Glowstone: 30
        Gold_Ore: 350
        Hard_Clay: 30
        Iron_Ore: 250
        Lapis_Ore: 400
        Mossy_Cobblestone: 30
        Netherrack: 30
        Obsidian: 150
        Packed_Ice: 50
        Quartz_Ore: 100
        Redstone_Ore: 150
        Sandstone: 30
        Stained_Clay: 50
        Stone: 30
        Red_Sandstone: 100
        Prismarine: 70
        Purpur_Block: 200
        Purpur_Pillar: 250
        Purpur_Slab: 150
        Purpur_Stairs: 250
    Repair:
        Base: 1000.0
        Wood: 0.6
        Stone: 1.3
        Iron: 2.5
        Gold: 0.3
        Diamond: 5.0
        Leather: 1.6
        String: 1.8
        Other: 1.5
    Smelting:
        Coal_Ore: 10
        Diamond_Ore: 75
        Emerald_Ore: 100
        Gold_Ore: 35
        Iron_Ore: 25
        Lapis_Ore: 40
        Quartz_Ore: 25
        Redstone_Ore: 15
    Taming:
        Animal_Taming:
            Wolf: 250
            Ocelot: 500
            Horse: 1000
    Combat:
        Multiplier:
            Animals: 1.0
            Creeper: 4.0
            Skeleton: 3.0
            Spider: 2.0
            Giant: 4.0
            Zombie: 2.0
            Slime: 2.0
            Ghast: 3.0
            Pig_Zombie: 3.0
            Enderman: 1.0
            Cave_Spider: 3.0
            Silverfish: 3.0
            Blaze: 3.0
            Magma_Cube: 2.0
            Ender_Dragon: 0.0
            Wither: 0.0
            Witch: 0.0
            Iron_Golem: 2.0
            Wither_Skeleton: 4.0
            Endermite: 2.0
            Guardian: 3.0
            Elder_Guardian: 4.0
            Shulker: 2.0
```
