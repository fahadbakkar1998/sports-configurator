export class Version
{
	static isVersionHigherThan(version, checkVersion)
	{
		if(version != undefined)
		{
			checkVersion = checkVersion.replace(/[^\d.-]/g, '').split('.');
			let givenVersion = version.replace(/[^\d.-]/g, '').split('.');
			let flag = true;
			if(checkVersion.length != givenVersion.length)
			{
				return false;
			}
			for (let i=0;i<checkVersion.length;i++)
			{
				let a = parseInt(checkVersion[i]);
				let b = parseInt(givenVersion[i]);
				flag &= (a >= b);
			}
			return flag;
			
		}
		return false;
	}
		
	static getInformalVersion()
	{
		return '0.0.2a';
	}
	
	static getTechnicalVersion()
	{
		return '0.0.2a';
	}
}