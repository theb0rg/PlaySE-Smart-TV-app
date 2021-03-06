var timeout;

var Audio =
{
    plugin : null
};

Audio.init = function()
{
    var success = true;
    
    this.plugin = document.getElementById("pluginAudio");
    
    if (!this.plugin)
    {
        success = false;
    }

    return success;
};

Audio.setRelativeVolume = function(delta)
{

	window.clearTimeout(timeout);
    this.plugin.SetVolumeWithKey(delta);
	$('.video-wrapper').css("display", "block");				
	$('.video-footer').css("display", "block");
	$('.bottomoverlaybig').css("display", "block");
	$('.bottomoverlaybig').html('Volym: ' + this.getVolume() + '%');
	timeout = window.setTimeout(this.hideControls, 5000);

};

Audio.hideControls = function(){
	$('.video-wrapper').css("display", "none");				
	$('.video-footer').css("display", "none");
	$('.bottomoverlaybig').css("display", "none");
};

Audio.getVolume = function()
{
    return this.plugin.GetVolume();
};
