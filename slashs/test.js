const {SlashCommandBuilder}=require("discord.js");
module.exports={
    data:new SlashCommandBuilder()
    .setName("test")
.setDescription(`Test command`),
    async execute(interaction){
        return await interaction.reply({
            content: `**The bot is working!**`
        });
    },
};