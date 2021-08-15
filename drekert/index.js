const	Discord = require('discord.js')
const	{ MessageAttachment } = require('discord.js')

const config =require ("./config.json");
const client= new Discord.Client()
const helloResponses = ["Wanda Nara", "la madre de uri", "Una foto de fercho en mardel", "perrito con el pelo rosa", "un superpancho"];
const perrit0 = new MessageAttachment ('https://external-preview.redd.it/SOltzNrSXLCCXutwdRUGaBUjYvwiapv1Z6f3I42t_dg.jpg?width=640&crop=smart&auto=webp&s=caa5200b764925fa4ecc79740a558a0cebbd409d')
//// de aca es onLine


client.once('ready', () => {
	console.log('arranco piola el bot.');
});

client.login('848774213774213121');
//// aca termina online 






client.on('message', message => {




	

	if (message.content === 'perrito') {
		message.channel.send('que pasa rey?',perrit0)


	 }



	///test rapido


 // It is considered bad practice to let your bot react to other bots.
 if (message.author.bot) return;

 // If a message doesn't start with your bot's prefix, don't bother going through the cases.
 if (!message.content.startsWith("-")) return;

 // Args length check. #1 is the command, #2 and higher are the arguments
 var args = message.content.substring("-".length).split(" ");

 switch (args[0].toLowerCase()) {
	 case "mepajeocon":
		 var response = helloResponses [Math.floor(Math.random()*helloResponses .length)];

		 message.channel.send(response).then().catch(console.error);
		 break;
	 default:
		 break;

		
	
	
	//nose
	 // var server = message.guild;
	 case "server":
		
  
	const embed = new Discord.MessageEmbed()
    .setThumbnail(server.iconURL())
    .setAuthor(server.name, server.iconURL())
    .addField('ID', server.id, true)
    .addField('Region', server.region, true)
    .addField('Creado el', server.joinedAt.toDateString(), true)
    .addField('Dueño del Servidor', server.owner.user.tag +'('+server.owner.user.id +')', true)
    .addField('Miembros', server.memberCount, true)
    .addField('Roles', server.roles.size, true)
	.addField ('Sabias que ||uriel se la come doblada||')
    .setColor(0x66B3FF)
		
	message.channel.send(embed);
	 
	//termina
}})	
;



////fin






 client.login(config.BOT_TOKEN)
